'use strict'

module.exports = (robot) => {


 robot.hear(/Hi/, (res) => {
    const arrresponse = ['Hi', 'Hello Friend', 'Holla']

    res.reply(res.random(arrresponse))
  })


  robot.hear(/good morning/i, (res) => {
    res.send('Good Morning Sunshine')
  })



  const movies = ['Forrest Gump', 'Brooklyn', 'Bohemian Rhapsody', 'Hush', 'Le Week-End', 'Wonder']
  const songs = ['love of my life- Queen', 'River- leon bridges', 'Jersey Girl- Tom Waits', 'Location- Khalid']
  robot.respond(/suggest me a (.*)/i, (res) => {
    const suggest = res.match[1]
    if (suggest == 'movie')
      res.send(res.random(movies))
    if (suggest == 'song')
      res.send(res.random(songs))
  })





  const sen = ["have a nice weekend", "happy weekend"]
  const images = [
    "https://media1.giphy.com/media/YJ5OlVLZ2QNl6/200.gif?cid=3640f6095c5ee1f8565a72306bc9dc24",
    "https://media1.giphy.com/media/14udF3WUwwGMaA/200.gif?cid=3640f6095c5ee1f8565a72306bc9dc24",
    "https://media3.giphy.com/media/Y8tW6EgVscvGo/giphy.gif?cid=3640f6095c5ee1f8565a72306bc9dc24",
    "https://media3.giphy.com/media/13k4VSc3ngLPUY/200w.gif?cid=3640f6095c5ee1f8565a72306bc9dc24"]



  robot.respond(`/${sen.join('|')}/i`, (res) => {
    res.send(res.random(images))
  })


 


  robot.respond(/gossip!/i, (res) => {
    robot.messageRoom('UG02UGE8J', 'I\'ve a secret')

  })
  
}
