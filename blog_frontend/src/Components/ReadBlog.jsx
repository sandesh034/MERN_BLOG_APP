import React from 'react'
import image from '../Images/Fooding.jpeg'
import author from '../Images/Author.jpg'
import Navbar from './Navbar'
import Footer from './Footer'
import PotraitCard from './PotraitCard'

const ReadBlog = () => {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, [])
    return (
        <>
            <Navbar></Navbar>
            <div className='read-blog-container'>
                <div className='blog-content'>
                    <div className='blog-read-image'>
                        <img src={image} alt=''></img>
                    </div>
                    <div className='author-info'>
                        <div className='author-image'>
                            <img className='' src={author} alt='author'></img>
                        </div>
                        <div>
                            <p className='author-name'>Sandesh Dhital</p>
                            <p className='blog-time'>Posted 1 day ago</p>
                        </div>
                    </div>
                    <div className='blog-heading'>
                        <h2>What is mern stack ? Advantages And Disadvantages What Are Its application</h2>
                    </div>
                    <div className='blog-description'>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur quos architecto quae a atque saepe, quis quia ad repellat! Maiores quaerat quos quasi saepe reiciendis deserunt voluptatem. Repudiandae molestiae unde omnis dignissimos id quis totam aliquid modi vero qui quia ducimus, quod beatae deleniti earum quisquam? Dolor delectus necessitatibus perferendis ratione tempore aspernatur qui sint ipsa vel ad unde minima, eligendi consequatur quisquam, repudiandae accusamus facilis temporibus aperiam fugit veritatis numquam velit. Inventore illum, laboriosam explicabo voluptatibus dolorem animi illo? Nostrum temporibus sint, error provident distinctio dolor dicta inventore ipsa a cupiditate laudantium repudiandae mollitia odit aspernatur possimus reiciendis blanditiis optio, nesciunt necessitatibus, neque consequuntur quia. Qui recusandae sint itaque? Fuga vero id qui saepe animi dicta eveniet eius totam, nulla numquam. Voluptate harum quod incidunt quo consequatur officia ducimus enim vitae nam natus alias molestias, distinctio neque suscipit eligendi laudantium nobis minima quas dolore.
                            <br></br><br></br>
                            Accusamus natus nesciunt officia ullam totam minus delectus maiores dolor possimus ea, eum itaque sunt commodi! Natus maiores consectetur blanditiis voluptas consequuntur cum placeat, magni libero reprehenderit accusamus! Quae eligendi officia neque, praesentium in nulla dicta aspernatur eaque impedit voluptates consequatur, necessitatibus corrupti iusto voluptatem, libero esse! Ab repellendus maxime ipsum aliquam praesentium minus sed!
                            <br></br><br></br>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, inventore facere? Error illo, magnam velit quidem delectus ipsa iusto aliquam ducimus veritatis soluta! Nemo ut aspernatur aliquid similique earum assumenda voluptas explicabo perspiciatis consequuntur. Quidem modi est iure doloremque enim recusandae a dolores ipsum hic, quae totam provident illo quas pariatur inventore reprehenderit repellat nisi esse saepe vel excepturi adipisci. Doloribus repellendus animi dolore repellat sint, explicabo id harum quasi hic itaque voluptate voluptatum ipsum aliquid ab. Temporibus corporis ullam officiis sequi reiciendis perferendis pariatur, repellat vitae dicta sit, animi impedit facilis fugit. Ad maxime commodi necessitatibus esse suscipit ab.
                        </p>
                    </div>
                    <div className='recomendation'>
                        <h2 className='recomendation-title'>Checkout Other Blogs By Same User</h2>
                        <hr style={{marginBottom:"10px"}}></hr>
                        <div className='recomendation-wrapper'>
                            <PotraitCard />
                            <PotraitCard />
                        </div>
                    </div>
                </div>
                <div className='right-sidebar'>
                    <h2>Checkout Other Blogs </h2>
                    <hr></hr>
                    <PotraitCard></PotraitCard>
                    <PotraitCard></PotraitCard>
                    <PotraitCard></PotraitCard>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ReadBlog