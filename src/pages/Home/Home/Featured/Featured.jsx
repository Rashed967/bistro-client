
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import img from '../../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured mt-8 bg-fixed  text-white'>
            <SectionTitle
            subHeading="Check it out"
            heading="Featured item"
            ></SectionTitle>
            <div>
         <div className='md:flex justify-center items-center space-x-4 px-36 py-28 '>
         <div>
                <img src={img} alt="" />
            </div>
            <div>
                <p>Aug, 21, 2019</p>
                <h3>Where can i get some?</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia accusamus dolor impedit unde porro ullam eos quae non praesentium quidem. Dicta odit non sequi vel, nulla voluptatem dolor quibusdam, blanditiis similique eligendi eos nobis provident.</p>
                <button className="btn btn-outline border-0 border-b-4">Order now</button>
            </div>
         </div>
            </div>
        </div>
    );
};

export default Featured;