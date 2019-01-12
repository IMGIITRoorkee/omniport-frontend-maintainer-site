import React, { Component } from "react"
import axios from "axios"

import {
    Form,
    Button,
    Dropdown,
    Container,
    Header,
    TextArea,
    Segment,
    Label,
} from "semantic-ui-react"
import style from "../../css/team/add-member-details.css"
import common from "../../css/page-common-styles.css"

import LinkList from "./linkList"

import { getCookie } from "formula_one"

const initial = {
    data: { site: "git", url: "" },
}
class AddMemberDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profile: {},
            data: initial.data,
            disabled: false,
            method: "post",
            URL: "/api/maintainer_site/logged_maintainer/",
            handle: "",
            shortBio: "",
            links: [],
            skills: [],
            music: { array: [], entry: "" },
            book: { array: [], entry: "" },
            film: { array: [], entry: "" },
            game: { array: [], entry: "" },
            hobbies: { array: [], entry: "" },
            links_id: [],
            errors: {
                music: "",
                book: "",
                film: "",
                game: "",
                hobbies: "",
                skills: "",
            },
            uploadedFileD: "",
            uploadedFileN: "",
            error_handle: false,
            error_shortBio: false,
            error_url: false,
            techSkillsOptions: [],
        }
        this.handlePost = this.handlePost.bind(this)
    }
    componentDidMount() {
        const URL1 = `/api/maintainer_site/logged_maintainer`
        const URL2 = `/api/maintainer_site/tech_skills`

        axios.all([axios.get(URL1), axios.get(URL2)]).then(
            axios.spread((memberRes, techSkillsRes) => {
                this.setState(
                    {
                        profile: memberRes.data,
                        techSkillsOptions: techSkillsRes.data,
                    },
                    () => {
                        if (this.state.profile.length) {
                            this.setState({ method: "patch" })
                            this.setState({
                                URL:
                                    "/api/maintainer_site/logged_maintainer/" +
                                    this.state.profile[0].handle +
                                    "/",
                            })
                            this.setState({
                                handle: this.state.profile[0].handle,
                                shortBio: this.state.profile[0].shortBiography,
                                uploadedFileD: this.state.profile[0].dankImage,
                                uploadedFileN: this.state.profile[0]
                                    .normieImage,
                            })
                            axios
                                .get(`/api/maintainer_site/social_link`)
                                .then(res => {
                                    var ids = []
                                    var arra = []
                                    for (let i = 0; i < res.data.length; i++) {
                                        ids.push(res.data[i].id)
                                        var obj = { site: "", url: "" }
                                        obj.site = res.data[i].site
                                        obj.url = res.data[i].url
                                        arra.push(obj)
                                    }
                                    this.setState({
                                        links_id: ids,
                                        links: arra,
                                    })
                                })

                            var arr = []
                            for (
                                let i = 0;
                                i < this.state.profile[0].favouriteGames.length;
                                i++
                            ) {
                                var obj = {
                                    site: "game",
                                    url: this.state.profile[0].favouriteGames[
                                        i
                                    ],
                                }
                                arr.push(obj)
                            }
                            var arr1 = []
                            for (
                                let i = 0;
                                i < this.state.profile[0].favouriteMusic.length;
                                i++
                            ) {
                                var obj = {
                                    site: "music",
                                    url: this.state.profile[0].favouriteMusic[
                                        i
                                    ],
                                }
                                arr1.push(obj)
                            }
                            var arr2 = []
                            for (
                                let i = 0;
                                i <
                                this.state.profile[0].favouriteLiterature
                                    .length;
                                i++
                            ) {
                                var obj = {
                                    site: "book",
                                    url: this.state.profile[0]
                                        .favouriteLiterature[i],
                                }
                                arr2.push(obj)
                            }
                            var arr3 = []
                            for (
                                let i = 0;
                                i < this.state.profile[0].favouriteVideo.length;
                                i++
                            ) {
                                var obj = {
                                    site: "film",
                                    url: this.state.profile[0].favouriteVideo[
                                        i
                                    ],
                                }
                                arr3.push(obj)
                            }
                            var arr4 = []
                            for (
                                let i = 0;
                                i <
                                this.state.profile[0].favouriteHobbies.length;
                                i++
                            ) {
                                var obj = {
                                    site: "hobbies",
                                    url: this.state.profile[0].favouriteHobbies[
                                        i
                                    ],
                                }
                                arr4.push(obj)
                            }
                            this.setState({
                                game: { entry: "", array: arr },
                                music: { entry: "", array: arr1 },
                                book: { entry: "", array: arr2 },
                                film: { entry: "", array: arr3 },
                                hobbies: { entry: "", array: arr4 },
                            })
                        }
                    }
                )
            })
        )
    }
    onChange = (event, data) => {
        const { value } = data

        this.setState({ data: { ...this.state.data, site: value } })
    }
    handleChange = e => {
        const target = e.target
        const value = target.value
        const name = target.name
        this.setState({ data: { ...this.state.data, [name]: value } })
    }
    handleChange2 = e => {
        const target = e.target
        const name = target.name
        const value = target.value
        this.setState({ [name]: { ...this.state[name], entry: value } })
    }
    addLink2 = e => {
        const name = e.target.name

        if (this.state[name].entry.length <= 63) {
            var arr = this.state[name].array
            var temp = { site: "" + name, url: this.state[name].entry }
            arr.push(temp)
            this.setState({ [name]: { array: arr, entry: "" } }, () =>
                console.log(this.state[name])
            )
        }
    }
    addLink = e => {
        const that = this
        that.setState({ error_url: false })
        let headers = {
            "X-CSRFToken": getCookie("csrftoken"),
        }
        axios({
            method: "post",
            url: "/api/maintainer_site/social_link/",
            data: this.state.data,
            headers: headers,
        })
            .then(response => {
                //handle success
                var arr = this.state.links
                arr.push(this.state.data)
                this.setState({ links: arr, data: initial.data })

                var arr1 = this.state.links_id
                arr1.push(response.data.id)
                this.setState({ links_id: arr1 })
            })
            .catch(function(response) {
                //handle error
                if (response.response.data.url != null) {
                    that.setState({ error_url: true })
                }
            })
    }
    handleUpdateDelete = e => {
        var id1 = e.target.id
        var arr = []
        for (let i = 0; i < this.state.links.length; i++) {
            if (i != id1) {
                arr.push(this.state.links[i])
            }
        }

        let headers = {
            "X-CSRFToken": getCookie("csrftoken"),
        }

        axios({
            method: "delete",
            url:
                "/api/maintainer_site/social_link/" +
                this.state.links_id[id1] +
                "/",
            headers: headers,
        }).then(response => {})

        var arr1 = []
        for (let i = 0; i < this.state.links_id.length; i++) {
            if (i != id1) {
                arr1.push(this.state.links_id[i])
            }
        }

        this.setState({
            data: initial.data,
            links: arr,
            links_id: arr1,
        })
    }
    handleUpdateDelete2 = e => {
        var name = e.target.getAttribute("pop")

        var id = e.target.id

        var arr = []
        for (let i = 0; i < this.state[name].array.length; i++) {
            if (i != id) {
                arr.push(this.state[name].array[i])
            }
        }
        this.setState({
            [name]: { array: arr, entry: "" },
        })
    }
    fileChange = e => {
        this.setState({
            [e.target.name]: e.target.files[0],
        })
    }

    handlePost() {
        const {
            handle,
            shortBio,
            links,
            skills,
            uploadedFileN,
            uploadedFileD,
        } = this.state
        console.log("sdf")

        var book = [],
            music = [],
            film = [],
            game = [],
            hobbies = []

        for (let i = 0; i < this.state.book.array.length; i++) {
            book.push(this.state.book.array[i].url)
        }
        for (let i = 0; i < this.state.music.array.length; i++) {
            music.push(this.state.music.array[i].url)
        }
        for (let i = 0; i < this.state.film.array.length; i++) {
            film.push(this.state.film.array[i].url)
        }
        for (let i = 0; i < this.state.game.array.length; i++) {
            game.push(this.state.game.array[i].url)
        }
        for (let i = 0; i < this.state.hobbies.array.length; i++) {
            hobbies.push(this.state.hobbies.array[i].url)
        }

        if (
            uploadedFileD &&
            uploadedFileN &&
            handle &&
            shortBio &&
            book.length &&
            music.length &&
            film.length &&
            game.length &&
            hobbies.length &&
            skills.length <= 5 &&
            skills.length > 0
        ) {
            var formData = new FormData()
            console.log("DATA post ki condition taiyaar")
            formData.append("handle", handle)
            formData.append("short_biography", shortBio)
            formData.append("social_information", links)

            formData.append("technical_skills", skills)

            music.map(element => formData.append("favourite_music", element))
            book.map(element =>
                formData.append("favourite_literature", element)
            )
            film.map(element => formData.append("favourite_video", element))
            game.map(element => formData.append("favourite_games", element))
            hobbies.map(element =>
                formData.append("favourite_hobbies", element)
            )

            if (this.state.uploadedFileN.type) {
                if (this.state.uploadedFileN.type.substring(0, 5) == "image") {
                    formData.append("normie_image", uploadedFileN)
                }
            }

            if (this.state.uploadedFileD.type) {
                if (this.state.uploadedFileD.type.substring(0, 5) == "image") {
                    formData.append("dank_image", uploadedFileD)
                }
            }

            let headers = {
                "Content-Type": "multipart/form-data",
                "X-CSRFToken": getCookie("csrftoken"),
            }

            const that = this
            that.setState({ error_handle: false })
            that.setState({ error_shortBio: false })
            axios({
                method: this.state.method,
                url: this.state.URL,
                data: formData,
                headers: headers,
            })
                .then(function(response) {
                    // handle success
                    that.props.history.push("../team/")
                })
                .catch(function(response) {
                    //handle error
                    if (response.response.data.handle != null) {
                        that.setState({ error_handle: true })
                    }
                    if (response.response.data.shortBiography != null) {
                        that.setState({ error_shortBio: true })
                    }
                })
        }
    }

    render() {
        const options = [
            { icon: "behance", text: "Behance", value: "beh" },
            { icon: "blogger", text: "Blogger", value: "blo" },
            { icon: "dribbble", text: "Dribbble", value: "dri" },
            { icon: "facebook", text: "Facebook", value: "fac" },
            { icon: "flickr", text: "Flickr", value: "fli" },
            { icon: "github", text: "Github", value: "git" },
            { icon: "google", text: "Google", value: "goo" },
            { icon: "linkedin", text: "LinkedIn", value: "lin" },
            { icon: "medium", text: "Medium", value: "med" },
            { icon: "pinterest", text: "Pinterest", value: "pin" },
            { icon: "reddit", text: "Reddit", value: "red" },
            { icon: "skype", text: "Skype", value: "sky" },
            { icon: "snapchat", text: "Snapchat", value: "sna" },
            { icon: "tumblr", text: "Tumblr", value: "tum" },
            { icon: "twitter", text: "Twitter", value: "twi" },
            { icon: "youtube", text: "Youtube", value: "you" },
            { icon: "globe", text: "Other website", value: "oth" },
        ]
        return (
            <div>
                <Container styleName="common.margin">
                    <Header as="h1">Add Member Details</Header>
                    <Form>
                        <Form.Field required>
                            <label>Handle Name</label>
                            <input
                                placeholder="Handle Name"
                                onChange={event => {
                                    this.setState({
                                        handle: event.target.value,
                                    })
                                }}
                                value={this.state.handle}
                            />
                            {this.state.error_handle && (
                                <Label color="red" pointing>
                                    This Handle already exists
                                </Label>
                            )}
                        </Form.Field>

                        <Form.Field
                            required
                            control={TextArea}
                            label="Short Bio"
                            placeholder="Tell us more about you..."
                            onChange={event => {
                                this.setState({ shortBio: event.target.value })
                            }}
                            value={this.state.shortBio}
                        />
                        {this.state.error_shortBio && (
                            <Label color="red" pointing>
                                Maximum 255 characters allowed
                            </Label>
                        )}
                    </Form>

                    <Segment basic fluid>
                        <Segment
                            attached="top"
                            styleName="style.headingBox"
                            fluid
                        >
                            <span>
                                <h3>Social media links</h3>
                            </span>
                        </Segment>
                        <Segment textAlign="left" attached="bottom" fluid>
                            <Form>
                                <Form.Field>
                                    <label>Site</label>
                                    <Dropdown
                                        selection
                                        name="site"
                                        value={this.state.data.site}
                                        onChange={this.onChange}
                                        options={options}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input
                                        label="URL"
                                        onChange={this.handleChange}
                                        value={this.state.data.url}
                                        name="url"
                                        placeholder="Add URl ..."
                                    />
                                    {this.state.error_url && (
                                        <Label color="red" pointing>
                                            Enter a valid URL
                                        </Label>
                                    )}
                                </Form.Field>

                                <Form.Field>
                                    <Button
                                        color="blue"
                                        name="music"
                                        onClick={this.addLink}
                                    >
                                        Add
                                    </Button>
                                </Form.Field>
                            </Form>

                            <LinkList
                                data={this.state.links}
                                handleUpdateDelete={this.handleUpdateDelete}
                            />
                        </Segment>
                    </Segment>
                    <Segment basic>
                        <Segment attached="top">
                            <span>
                                <h3>Music</h3>
                            </span>
                        </Segment>
                        <Segment textAlign="left" attached="bottom">
                            <Form>
                                <Form.Field>
                                    <Form.Input
                                        onChange={this.handleChange2}
                                        value={this.state.music.entry}
                                        name="music"
                                        placeholder="Add Music preferences ..."
                                    />
                                    {this.state.music.entry.length > 63 && (
                                        <Label color="red" pointing>
                                            Maximum 63 characters are allowed
                                            only
                                        </Label>
                                    )}
                                </Form.Field>

                                <Form.Field>
                                    <Button
                                        color="blue"
                                        name="music"
                                        onClick={this.addLink2}
                                        disabled={
                                            this.state.music.array.length >= 5
                                        }
                                    >
                                        Add
                                    </Button>
                                </Form.Field>
                            </Form>

                            <LinkList
                                data={this.state.music.array}
                                handleUpdateDelete={this.handleUpdateDelete2}
                                name="music"
                            />
                        </Segment>
                    </Segment>

                    <Segment basic>
                        <Segment attached="top">
                            <span>
                                <h3>Literature</h3>
                            </span>
                        </Segment>
                        <Segment textAlign="left" attached="bottom">
                            <Form>
                                <Form.Field>
                                    <Form.Input
                                        onChange={this.handleChange2}
                                        value={this.state.book.entry}
                                        name="book"
                                        placeholder="Add Books that u read/like ..."
                                    />
                                    {this.state.book.entry.length > 63 && (
                                        <Label color="red" pointing>
                                            Maximum 63 characters are allowed
                                            only
                                        </Label>
                                    )}
                                </Form.Field>

                                <Form.Field>
                                    <Button
                                        color="blue"
                                        name="book"
                                        onClick={this.addLink2}
                                        disabled={
                                            this.state.book.array.length >= 5
                                        }
                                    >
                                        Add
                                    </Button>
                                </Form.Field>
                            </Form>

                            <LinkList
                                data={this.state.book.array}
                                handleUpdateDelete={this.handleUpdateDelete2}
                                name="book"
                            />
                        </Segment>
                    </Segment>
                    <Segment basic>
                        <Segment attached="top">
                            <span>
                                <h3>Movies/TV Series</h3>
                            </span>
                        </Segment>
                        <Segment textAlign="left" attached="bottom">
                            <Form>
                                <Form.Field>
                                    <Form.Input
                                        onChange={this.handleChange2}
                                        value={this.state.film.entry}
                                        name="film"
                                        placeholder="Add MOvies/Tv Series preferences ..."
                                    />
                                    {this.state.film.entry.length > 63 && (
                                        <Label color="red" pointing>
                                            Maximum 63 characters are allowed
                                            only
                                        </Label>
                                    )}
                                </Form.Field>

                                <Form.Field>
                                    <Button
                                        color="blue"
                                        name="film"
                                        onClick={this.addLink2}
                                        disabled={
                                            this.state.film.array.length >= 5
                                        }
                                    >
                                        Add
                                    </Button>
                                </Form.Field>
                            </Form>

                            <LinkList
                                data={this.state.film.array}
                                handleUpdateDelete={this.handleUpdateDelete2}
                                name="film"
                            />
                        </Segment>
                    </Segment>

                    <Segment basic>
                        <Segment attached="top">
                            <span>
                                <h3>Games You Play</h3>
                            </span>
                        </Segment>
                        <Segment textAlign="left" attached="bottom">
                            <Form>
                                <Form.Field>
                                    <Form.Input
                                        onChange={this.handleChange2}
                                        value={this.state.game.entry}
                                        name="game"
                                        placeholder="Add Your Games that u play ..."
                                    />
                                    {this.state.game.entry.length > 63 && (
                                        <Label color="red" pointing>
                                            Maximum 63 characters are allowed
                                            only
                                        </Label>
                                    )}
                                </Form.Field>

                                <Form.Field>
                                    <Button
                                        color="blue"
                                        name="game"
                                        onClick={this.addLink2}
                                        disabled={
                                            this.state.game.array.length >= 5
                                        }
                                    >
                                        Add
                                    </Button>
                                </Form.Field>
                            </Form>

                            <LinkList
                                data={this.state.game.array}
                                handleUpdateDelete={this.handleUpdateDelete2}
                                name="game"
                            />
                        </Segment>
                    </Segment>

                    <Segment basic>
                        <Segment attached="top">
                            <span>
                                <h3>Tell Us Your Hobbies</h3>
                            </span>
                        </Segment>
                        <Segment textAlign="left" attached="bottom">
                            <Form>
                                <Form.Field>
                                    <Form.Input
                                        onChange={this.handleChange2}
                                        value={this.state.hobbies.entry}
                                        name="hobbies"
                                        placeholder="Add Your Hobbies..."
                                    />
                                    {this.state.hobbies.entry.length > 63 && (
                                        <Label color="red" pointing>
                                            Maximum 63 characters are allowed
                                            only
                                        </Label>
                                    )}
                                </Form.Field>

                                <Form.Field>
                                    <Button
                                        color="blue"
                                        name="hobbies"
                                        onClick={this.addLink2}
                                        disabled={
                                            this.state.hobbies.array.length >= 5
                                        }
                                    >
                                        Add
                                    </Button>
                                </Form.Field>
                            </Form>

                            <LinkList
                                data={this.state.hobbies.array}
                                handleUpdateDelete={this.handleUpdateDelete2}
                                name="hobbies"
                            />
                        </Segment>
                    </Segment>

                    <Form>
                        <Form.Dropdown
                            placeholder="Select tech Skill"
                            fluid
                            multiple
                            selection
                            search
                            required
                            label="Tech Skills:"
                            options={this.state.techSkillsOptions}
                            onChange={(event, { value }) => {
                                this.setState({
                                    skills: value,
                                })
                            }}
                        />
                        {this.state.skills.length > 5 && (
                            <Label color="red" pointing>
                                Maximum 5 skills are allowed only
                            </Label>
                        )}

                        <Form.Field required>
                            <label>Normie Image:</label>
                            <input
                                type="file"
                                onChange={this.fileChange}
                                name={"uploadedFileN"}
                            />
                        </Form.Field>

                        {this.state.uploadedFileN && (
                            <a href={this.state.uploadedFileN} target="_blank">
                                See previous uploaded
                            </a>
                        )}
                        <Segment basic />
                        <Form.Field required>
                            <label>Dank Image:</label>
                            <input
                                type="file"
                                onChange={this.fileChange}
                                name={"uploadedFileD"}
                            />
                        </Form.Field>
                        {this.state.uploadedFileD && (
                            <a href={this.state.uploadedFileD} target="_blank">
                                See previous uploaded
                            </a>
                        )}
                        <Segment basic />
                        <Button type="submit" onClick={this.handlePost}>
                            Add Member
                        </Button>
                    </Form>
                    <Segment basic />
                </Container>
            </div>
        )
    }
}
export default AddMemberDetails
