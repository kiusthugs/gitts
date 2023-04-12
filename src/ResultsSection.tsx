import React from 'react'

type ResultsProps = {
    user: {
        login?: string,
        html_url?: string,
        avatar_url?: string
    }
}
const ResultsSection = ({user}: ResultsProps) => {
    console.log(user)
  return (
    <div>
        <p>Username: {user.login}</p>
        <img src={`${user.avatar_url}`}></img><br/>
        <a href={`${user.html_url}`}>GitHub link</a>
    </div>
  )
}

export default ResultsSection