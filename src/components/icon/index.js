import ArrowDown from './arrow-down'
import Location from './location'
import Twitter from './twitter'
import Cancel from './cancel'
import Branch from './branch'
import Github from './github'
import Search from './search'
import Check from './check'
import Heart from './heart'
import Book from './book'
import Home from './home'
import Link from './link'
import Star from './star'
import User from './user'



function Index({ name, ...props }) {
  switch (name){
    case 'heart': {
      return <Heart {...props} />
    }
    case 'branch': {
      return <Branch {...props} />
    }
    case 'arrow-down': {
      return <ArrowDown {...props} />
    }
    case 'book': {
      return <Book {...props} />
    }
    case 'cancel': {
      return <Cancel {...props} />
    }
    case 'check': {
      return <Check {...props} />
    }
    case 'github': {
      return <Github {...props} />
    }
    case 'home': {
      return <Home {...props} />
    }
    case 'link': {
      return <Link {...props} />
    }
    case 'location': {
      return <Location {...props} />
    }
    case 'search': {
      return <Search {...props} />
    }
    case 'star': {
      return <Star {...props} />
    }
    case 'twitter': {
      return <Twitter {...props} />
    }
    case 'user': {
      return <User {...props} />
    }
    
    default:{
      return null
    } 
  }
}

Index.defaultProps = {
  size: 16,
  color: 'white',
}

export default Index
