import React from 'react'
import PostAuthor from '../Components/PostAuthor'
import {Link} from 'react-router-dom'
import Thumbnail from '../images/blog1.png'

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor/>
          <div className="post-detail__buttons">
            <Link to={'/posts/werwer/edit'} className='btn sm primary'>Edit</Link>
            <Link to={'/posts/werwer/delete'} className='btn sm primary'>Delete</Link>
          </div>
        </div>
        <h1>This is the post title!</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio eveniet quisquam asperiores optio nulla doloremque, nihil maxime perspiciatis unde neque harum, facilis excepturi eos repellat ea repudiandae quia expedita et magni reiciendis mollitia saepe dolorem consectetur! Nam numquam nihil aliquid doloremque recusandae odit reprehenderit, minima tenetur earum rerum dolorum voluptatibus dolorem odio neque, hic consectetur unde? Deserunt unde ipsam ducimus aut minima sed rerum dolores in dolorem eius vero nulla amet illo velit quidem, optio maxime nisi. Praesentium necessitatibus veniam assumenda ex totam asperiores corporis tempora tempore dolore, harum nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum repellendus assumenda numquam rerum. Reiciendis possimus, expedita necessitatibus voluptate dolorem itaque architecto! Dicta impedit suscipit laborum iure totam saepe sint omnis? Nihil vero exercitationem expedita quae eum accusamus velit eaque quos corporis error vitae recusandae possimus mollitia nemo, numquam, ad, culpa neque tempora harum ab labore.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aspernatur nulla placeat iste veniam eos eaque quibusdam sit unde corporis totam at aliquid molestiae nihil commodi, eum laboriosam delectus incidunt necessitatibus voluptates excepturi dolorem modi? Debitis modi distinctio iusto cumque doloribus amet dolores dolorum officiis blanditiis facere in tempore consequatur, dolor dolorem quas dicta reiciendis velit nihil omnis sit doloremque. Iusto, suscipit? Dolores minima nihil recusandae porro hic eum modi eaque perspiciatis esse cupiditate, voluptatem vero a amet sit unde! Consequatur ea repellendus suscipit, natus assumenda, odit pariatur quia labore quam nemo laboriosam. Eum earum explicabo itaque unde, accusantium numquam eligendi ipsam minus! Atque totam hic, molestiae dolores minima facilis mollitia.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa aliquid, quae omnis repellendus sed soluta excepturi culpa mollitia, accusantium quidem quaerat cupiditate voluptatum consequuntur fuga nemo at tenetur debitis, possimus dolorum voluptatem ipsum? Veritatis quibusdam voluptate architecto, accusantium possimus ipsa perspiciatis incidunt aliquid magni dolore cupiditate soluta fugit quae nam atque consequatur nisi delectus eaque ducimus quisquam id. Porro totam numquam soluta enim sed, assumenda necessitatibus pariatur in ipsum, facilis quo, quis nisi doloribus fugiat. Enim facilis officia voluptates adipisci eos quod, eum, nihil, cupiditate ipsam corporis eligendi! Porro dicta quae quibusdam necessitatibus voluptates excepturi vel nihil doloribus, cumque corporis similique eligendi quas placeat mollitia ducimus officiis iste ipsa consectetur? Asperiores ab tenetur, maxime fugiat eos neque pariatur nulla aperiam hic recusandae nemo tempore, molestias eligendi assumenda quia quidem voluptas reprehenderit itaque, consequatur mollitia error quibusdam quo dignissimos inventore! Nobis ut eos voluptatem iusto, adipisci mollitia non quisquam minima inventore rerum laboriosam vero a voluptatibus illo ea rem molestias! Totam voluptate eaque illo possimus placeat architecto maxime molestias cum quos. Dolorem temporibus, impedit, amet voluptas alias corrupti, est voluptatum veniam tempore at cum molestiae tempora rerum vitae quibusdam exercitationem. Sunt esse nulla optio porro! Numquam rem sunt quam obcaecati voluptate.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium sed ad nam consequatur ut aut. Porro expedita nostrum minima ea quod officiis, eum quis voluptas est magnam. Eius debitis esse in est, voluptatibus error eum soluta quam hic modi, repellat architecto necessitatibus cum nostrum fugit laudantium omnis voluptate eligendi pariatur dignissimos numquam magni rerum officiis deserunt. Vel magnam est repellendus sit, alias dolores voluptatum, hic a, commodi exercitationem quisquam iste ab? Nostrum laboriosam laborum animi ullam ad, aliquam commodi harum similique, ut aliquid deleniti atque assumenda in at quas itaque blanditiis vel. Sunt consequatur tempore dolores tenetur ipsam eos earum.
        </p>
      </div>
    </section>
  )
}

export default PostDetail