import {
  AiFillCalendar,
  AiFillLock,
  AiFillShop,
  AiOutlineEye,
  AiOutlineMore,
  AiOutlineShareAlt,
} from 'react-icons/ai'

const Post = ({
  type,
  title,
  description,
  userName,
  userImage,
  views,
  btnName,
  location,
  address,
  eventTime,
  postImage,
}) => {
  return (
    <div className='card  '>
      <img src={userImage} alt={userName} className='' />
      <div className='m-2'>
        <p className='my-2'>{type}</p>

        <div className='d-flex'>
          <h1 className=''>{title}</h1>
          <button className='btn'>
            <AiOutlineMore />
          </button>
        </div>

        {description && <p className=''>{description}</p>}

        {(eventTime || address || location) && (
          <div className=''>
            {eventTime && (
              <span>
                <AiFillCalendar />
                {eventTime}
              </span>
            )}
            {address && (
              <span>
                <AiFillShop />
                {address}
              </span>
            )}
            {location && (
              <span>
                <AiFillLock />
                {location}
              </span>
            )}
          </div>
        )}

        <div className='d-flex'>
          <div className='d-flex'>
            <img src={postImage} alt={userName} />
            <h3 className=''>{userName}</h3>
          </div>
          <div className='d-flex'>
            <span>
              <AiOutlineEye />
              {views}k views
            </span>
            <button className='btn'>
              <AiOutlineShareAlt />
            </button>
          </div>
        </div>

        {btnName && <button className='btn'>{btnName}</button>}
      </div>
    </div>
  )
}
export default Post
