import styled from 'styled-components'
import Button from './Button'
import Icon from './icon'
import LayoutProfile from './Layout-profile'

const ProfileStyled = styled.div`
  grid-area: profile;

  .info{
    color: var(--grey-1);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: .5rem;
    font: var(--body2-semi-bold);
    margin: 0;
  }

  a:hover{
    text-decoration: underline;
  }

  .avatar{
    border-radius: 50%;
    border: 1px solid var(--grey);
    box-sizing: border-box;
    /* overflow: hidden; */
    inline-size: 100%;
    max-inline-size: 17.375rem;
    block-size: auto;
    aspect-ratio: 1/1;
  }

  .name{
    font: var(--headline1);
    color: var(--white);
    margin: 0;
  }
  
  .username{
    margin: 0;
    font: var(--headline2-light);
  }

  .buttons{
    display: flex;
    gap: .5rem;
  }
`

function Profile(props) {
  const { name, login, avatar_url, bio, followers, following, location, twitter_username, blog } = props

  return (
    <ProfileStyled>
      <LayoutProfile>
        <div className='user-data'>
          <img src={avatar_url} alt="" className="avatar" width="278" height="278" />
          <div className='user-name'>
            <p className="name">{name}</p>
            <p className="username">{login}</p>
          </div>
        </div>
        <div className="buttons">
          <Button 
            text="follow" 
            link="/" 
            className="custom" 
          />
          <Button 
            text="sponsor"
            icon={<Icon
              name="heart"
              size={24}
              color="var(--pink)"            
            />}
          />
        </div>
        <div className='info-container'>
          <p className="bio info">
            {bio}
          </p>
          <p className="followers info">
            <Icon 
              name="user"
              size="24"
              color="var(--grey)"
            />
            {followers} <span>followers</span> · {following} <span>following</span>
          </p>
          
          <p className="location info">
            <Icon 
              name="location"
              size="24"
              color="var(--grey)"
            />
            {location}
          </p>
          <a className="info" href={blog} target="_blank" rel="noreferrer">
            <Icon 
              name="link"
              size="24"
              color="var(--grey)"
            />
            {blog}
          </a>
          <a className="info" href={`https://twitter.com/${twitter_username}`} target="_blank" rel="noreferrer">
            <Icon 
              name="twitter"
              size="24"
              color="var(--grey)"
            />
            @{twitter_username}
          </a>
        </div>
      </LayoutProfile>
    </ProfileStyled>
    
  )
}

export default Profile
