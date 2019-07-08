import React from 'react'
import { graphql } from "gatsby"
import { navigate } from 'gatsby-link'
import Layout from '../components/layout'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Oh hey! Just some things we need to know before you get here...</h1>
              <form class="aws-form"
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <fieldset class="fieldset">
                  <legend>Your info</legend>
                  <div className="field">
                    <label className="label" htmlFor={'name'}>
                      Name
                    </label>
                    <span>whatever you want us to call you when you are here</span>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'name'}
                        placeholder={'Shawn the Great'}
                        onChange={this.handleChange}
                        id={'name'}
                        required={true}
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label" htmlFor={'phone'}>
                      Phone
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'phone'}
                        name={'phone'}
                        placeholder={'000.000.0000'}
                        onChange={this.handleChange}
                        id={'phone'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'email'}>
                      Email
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'email'}
                        name={'email'}
                        placeholder={'shawn@adventureswithshawn.com'}
                        onChange={this.handleChange}
                        id={'email'}
                        required={true}
                      />
                    </div>
                  </div>
                </fieldset>
                <fieldset class="fieldset">
                  <legend>Emergency contacts</legend>
                  <div className="field">
                    <label className="label" htmlFor={'ename1'}>
                      Name
                    </label>
                    <span>First person we should call in case you are abducted by aliens</span>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'ename1'}
                        placeholder={'Mom'}
                        onChange={this.handleChange}
                        id={'ename1'}
                        required={true}
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label" htmlFor={'ephone1'}>
                      Phone
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'phone'}
                        name={'ephone1'}
                        placeholder={'000.000.0000'}
                        onChange={this.handleChange}
                        id={'ephone1'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'eemail1'}>
                      Email
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'email'}
                        name={'eemail1'}
                        placeholder={'mom@adventureswithshawn.com'}
                        onChange={this.handleChange}
                        id={'eemail1'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'ename2'}>
                      Name
                    </label>
                    <span>Second person we should call in case you are abducted by aliens</span>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'ename2'}
                        placeholder={'Dad'}
                        onChange={this.handleChange}
                        id={'ename2'}
                        required={true}
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label" htmlFor={'ephone2'}>
                      Phone
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'phone'}
                        name={'ephone2'}
                        placeholder={'000.000.0000'}
                        onChange={this.handleChange}
                        id={'ephone2'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'eemail2'}>
                      Email
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'email'}
                        name={'eemail2'}
                        placeholder={'dad@adventureswithshawn.com'}
                        onChange={this.handleChange}
                        id={'eemail2'}
                        required={true}
                      />
                    </div>
                  </div>
                </fieldset>
                <fieldset class="fieldset">
                  <legend>Medical Stuff</legend>
                  <div className="field">
                    <label className="label" htmlFor={'allergies'}>
                      Allergies?
                    </label>
                    <span>Anything we need to stay away from</span>
                    <div className="control">
                    <textarea
                      className="textarea"
                      name={'allergies'}
                      placeholder={'Hard labor'}
                      onChange={this.handleChange}
                      id={'allergies'}
                      required={true}
                    />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label" htmlFor={'meds'}>
                      Medications?
                    </label>
                    <span>Any livesaving drugs you need to get through the week</span>
                    <div className="control">
                    <textarea
                      className="textarea"
                      name={'meds'}
                      placeholder={'m&ms'}
                      onChange={this.handleChange}
                      id={'meds'}
                      required={true}
                    />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'phobias'}>
                      Phobias?
                    </label>
                    <span>Anything you really can not do... no judgement</span>
                    <div className="control">
                    <textarea
                      className="textarea"
                      name={'phobias'}
                      placeholder={'clowns'}
                      onChange={this.handleChange}
                      id={'phobias'}
                      required={true}
                    />
                    </div>
                  </div>
                </fieldset>
                <fieldset class="fieldset">
                  <legend>Preferences</legend>
                  <div className="field">
                    <label className="label" htmlFor={'goodfood'}>
                      Foods that make you smile
                    </label>
                    <div className="control">
                    <textarea
                      className="textarea"
                      name={'goodfood'}
                      placeholder={'Hard labor'}
                      onChange={this.handleChange}
                      id={'goodfood'}
                      required={true}
                    />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label" htmlFor={'meds'}>
                      Foods that you will absolutely not eat
                    </label>
                    <div className="control">
                    <textarea
                      className="textarea"
                      name={'meds'}
                      placeholder={'m&ms'}
                      onChange={this.handleChange}
                      id={'meds'}
                      required={true}
                    />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'color'}>
                      Your fav colour
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'color'}
                        placeholder={'burnt sienna'}
                        onChange={this.handleChange}
                        id={'color'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'shape'}>
                      Your fav shape
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'shape'}
                        placeholder={'hexagon'}
                        onChange={this.handleChange}
                        id={'shape'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'daytime'}>
                      Your fav time of day
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'daytime'}
                        placeholder={'3am'}
                        onChange={this.handleChange}
                        id={'daytime'}
                        required={true}
                      />
                    </div>
                  </div>
                </fieldset>
                <div className="field">
                  <label className="label" htmlFor={'message'}>
                    Anything else you thing we should know to make your week enjoyable, or just in general?
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <button className="button is-link" type="submit">
                    Do it!
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
