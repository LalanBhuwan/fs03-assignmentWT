import { FaDesktop, FaRecycle, FaUser } from "react-icons/fa";
import {GiTrophyCup} from 'react-icons/gi';
import {BiBriefcase} from 'react-icons/bi';
import {BsCarFrontFill} from "react-icons/bs";
import {AiOutlineTwitter} from 'react-icons/ai';
const SectionFeatures = () => {
  return (
    <div>
      <div className="sectionfeatures_container dis_flex  direction_cl">
        <h5>Our Features</h5>
        <div className="dis_flex  features_about_container">
          <div className="dis_flex  direction_cl ">
            <div className="dis_flex icons">
              <FaDesktop />
            </div>

            <h6>Fully Resposive</h6>
            <span>
              Lorem ipsm is simply dummy text of the printing and typesetting
              industry. Lorem ipsum has been the industry's.
            </span>
            <button>Read More</button>
          </div>

          <div className="dis_flex  direction_cl">
            <div className="dis_flex icons">
              <FaUser />
            </div>

            <h6>Trusted Author</h6>
            <span>
              Lorem ipsm is simply dummy text of the printing and typesetting
              industry. Lorem ipsum has been the industry's.
            </span>
            <button>Read More</button>
          </div>

          <div className="dis_flex  direction_cl">
            <div className="dis_flex icons">
              <FaRecycle />
            </div>

            <h6>Reusable Elements</h6>
            <span>
              Lorem ipsm is simply dummy text of the printing and typesetting
              industry. Lorem ipsum has been the industry's.
            </span>
            <button>Read More</button>
          </div>
        </div>
      </div>

      <div className="features_overview dis_flex ">
        <div className="dis_flex direction_cl">
            <GiTrophyCup style={{fontSize:"2rem" , marginBottom: "10px"}}/>
          <span>22</span>
          <span>Awards Winning</span>
        </div>
        <div className="dis_flex direction_cl"> 
        <BiBriefcase style={{fontSize:"2rem" , marginBottom: "10px"}}/>
          <span>145</span>
          <span>Finished Projects</span>
        </div>
        <div className="dis_flex direction_cl">
            <BsCarFrontFill style={{fontSize:"2rem" , marginBottom: "10px"}}/>
          <span>349</span>
          <span>Products Sold</span>
        </div>
        <div className="dis_flex direction_cl">
            <AiOutlineTwitter style={{fontSize:"2rem", marginBottom: "10px"}}/>
          <span>2456</span>
          <span>Twitter Fans</span>
        </div>
      </div>
    </div>
  );
};
export default SectionFeatures;
