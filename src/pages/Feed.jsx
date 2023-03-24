import Post from '../components/Post'
import userImage from '../assets/02.jpg'
const postData = [
  {
    id: 0,
    postImage: userImage,
    type: '✍️ Article',
    title: 'What if famous brands had regular fonts? Meet RegulaBrands!',
    description:
      'I’ve worked in UX for the better part of a decade. From now on, I plan toLorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi quod ipsum laudantium, consequatur neque blanditiis ratione tenetur eius deleniti aspernatur dolor expedita quasi quis eligendi harum rerum! Natus, eum! Eius?',
    userImage: userImage,
    userName: 'Sarthak Kamra',
    views: 1.4,
  },
  {
    id: 1,
    postImage: userImage,

    type: '🔬️ Education',
    title:
      'Tax Benefits for Investment under National Pension Scheme launched by Government',
    description:
      'I’ve worked in UX for the better part of a decade. From now on, I plan to Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi quod ipsum laudantium, consequatur neque blanditiis ratione tenetur eius deleniti aspernatur dolor expedita quasi quis eligendi harum rerum! Natus, eum! Eius?',
    userImage: userImage,
    userName: 'Sarah West',
    views: 1.4,
  },
  {
    id: 2,
    postImage: userImage,
    type: '🗓️ Meetup',
    title: 'Finance & Investment Elite Social Mixer @Lujiazui',
    eventTime: 'Fri, 12 Oct, 2018',
    location: 'Ahmedabad, India',
    btnName: 'Visit Website',
    userImage: userImage,
    userName: 'Ronal Jones',
    views: 1.4,
  },
  {
    id: 3,
    type: '💼️ Job',
    title: 'Software Developer',
    address: 'Innovaccer Analytics Private Ltd.',
    location: 'Noida, India',
    btnName: 'Apply on Timesjobs',
    userImage: userImage,
    userName: 'Joseph Gray',
    views: 2.4,
  },
]
const Feed = () => {
  return (
    <>
      <div className='m-0 p-0'>
        {postData.map((post) => {
          return <Post key={post.id} {...post} />
        })}
      </div>
    </>
  )
}
export default Feed
