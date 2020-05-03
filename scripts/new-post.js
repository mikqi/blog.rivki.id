/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')
const fs = require('fs-extra')
const inquirer = require('inquirer')
const ejs = require('ejs')
const _ = require('lodash')

const PLACEHOLDER = '_post'
const paths = {
  templates: path.resolve(__dirname, PLACEHOLDER),
  posts: path.resolve(__dirname, '../content/posts'),
}

let templateData
let postName
let postPath
let finalPostFile

function setDate(time) {
  const calendar = new Date(time)
  const date = `${calendar.getDate()}`
  const month = `${calendar.getMonth() + 1}`
  const year = `${calendar.getFullYear()}`
  const dd = date.length === 1 ? `0${date}` : date
  const mm = month.length === 1 ? `0${month}` : month
  return `${year}-${mm}-${dd}`
}

function askQuestions() {
  const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'Whats your story? (title)',
    },
    {
      type: 'input',
      name: 'cover',
      message: 'Cover image url:',
      default: '',
    },
    {
      type: 'input',
      name: 'date',
      message: 'Date or folder name?',
      default: setDate(new Date()),
    },
    {
      type: 'list',
      name: 'category',
      message: 'Choose category type:',
      choices: [
        'Tools',
        'CSS',
        'Javascript',
        'Typescript',
        'Experience',
        'Frontend',
        'Backend',
        'Tutorial',
        'News',
      ],
    },
  ]

  return inquirer.prompt(questions)
}

function formatPostData(answer) {
  const { cover, category, date, title } = answer
  postName = `${answer.title}`
  postPath = path.resolve(paths.posts, date)

  templateData = {
    postName,
    title,
    cover,
    category,
    date,
  }
}

function renderTemplate(filePath) {
  let content = fs.readFileSync(filePath, 'utf8')
  content = ejs.render(content, templateData)
  fs.writeFileSync(filePath, content)
}

function formatTemplate() {
  const files = fs.readdirSync(paths.templates)

  files.forEach((filename) => {
    const filePath = path.resolve(paths.templates, filename)
    finalPostFile = path.resolve(
      postPath,
      filename.replace('index.md', `${_.kebabCase(postName)}.md`)
    )

    // // copy templates
    fs.copySync(filePath, finalPostFile)

    // // render template
    renderTemplate(finalPostFile)
  })
}

function run() {
  Promise.resolve()
    .then(askQuestions)
    .then(formatPostData)
    .then(formatTemplate)
    .then(() => {
      console.log(`Your post already generated`)
      console.log(finalPostFile)
    })
}

run()
