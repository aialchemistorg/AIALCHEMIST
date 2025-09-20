import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { AnimationPlaybackControls } from "framer-motion"; // ✅ sirf ye lagao

// Props type
type TeamCardProps = {
  imgSrc: string;
  name: string;
  role: string;
  quote: string;
  social: { linkedin: string; twitter: string; github: string };
  delay: number;
};

const TeamCard: React.FC<TeamCardProps> = ({
  imgSrc,
  name,
  role,
  quote,
  social,
  delay,
}) => {
  return (
    <StyledWrapper>
      <div className="card">
        {/* Mail button */}
        <button className="mail">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width={20} height={16} x={2} y={4} rx={2} />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </button>

        {/* Profile Pic */}
        <div className="profile-pic">
          <Image
            src={imgSrc}
            alt={name || "profile picture"}
            width={300}
            height={300}
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
        </div>

        {/* Bottom Section */}
        <div className="bottom">
          <div className="content">
            <span className="name">{name}</span>
            <span className="about-me">{role}</span>
          </div>
          <div className="bottom-bottom">
            <div className="social-links-container">
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height="15.999" viewBox="0 0 16 15.999">
                  <path
                    d="M6-582H-2a4,4,0,0,1-4-4v-8a4,4,0,0,1,4-4H6a4,4,0,0,1,4,4v8A4,4,0,0,1,6-582ZM2-594a4,4,0,0,0-4,4,4,4,0,0,0,4,4,4,4,0,0,0,4-4A4.005,4.005,0,0,0,2-594Zm4.5-2a1,1,0,0,0-1,1,1,1,0,0,0,1,1,1,1,0,0,0,1-1A1,1,0,0,0,6.5-596ZM2-587.5A2.5,2.5,0,0,1-.5-590,2.5,2.5,0,0,1,2-592.5,2.5,2.5,0,0,1,4.5-590,2.5,2.5,0,0,1,2-587.5Z"
                    transform="translate(6 598)"
                  />
                </svg>
              </a>
              <a href={social.twitter} target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </a>
              <a href={social.github} target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2..."></path>
                </svg>
              </a>
            </div>
            <button className="button">Contact Me</button>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};
const StyledWrapper = styled.div`
 .card {
    width: 280px;
    height: 280px;
    background: #111827;   /* 👈 dark slate bg */
  color: #F9FAFB;   
    border-radius: 32px;
    padding: 3px;
    position: relative;
    box-shadow: #604b4a30 0px 70px 30px -50px;
    transition: all 0.5s ease-in-out;
  }

  .card .mail {
    position: absolute;
    right: 2rem;
    top: 1.4rem;
    background: transparent;
    border: none;
  }

  .card .mail svg {
    stroke: #fbb9b6;
    stroke-width: 3px;
  }

  .card .mail svg:hover {
    stroke: #f55d56;
  }


 .card .profile-pic {
    position: absolute;
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    top: 3px;
    left: 3px;
    border-radius: 29px;
    z-index: 1;
     border: 4px solid #ef4444; 
    overflow: hidden;
    clip-path: circle(75% at 50% 50%);  /* 👈 smooth mask */
    transition: 
      width 0.6s ease-in-out,
      height 0.6s ease-in-out,
      top 0.6s ease-in-out,
      left 0.6s ease-in-out,
      clip-path 0.6s ease-in-out,  /* 👈 use clip-path instead of border-radius */
      border 0.6s ease-in-out,
      box-shadow 0.6s ease-in-out,
      z-index 0.6s ease-in-out;
  }

  .card:hover .profile-pic {
    width: 110px;
    height: 110px;
    top: 10px;
    left: 10px;
    clip-path: circle(50% at 50% 50%); /* 👈 perfect circle */
    border: 6px solid #fbb9b6;
    z-index: 3;
    box-shadow: rgba(96, 75, 74, 0.2) 0px 5px 15px;
  }

  .card .profile-pic img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    object-position: center top;
    transition: transform 0.6s ease-in-out, object-position 0.6s ease-in-out;
  }

  .card:hover .profile-pic img {
    transform: scale(1.2);
    object-position: center -20%;
  }


  .card .bottom {
    position: absolute;
    bottom: 3px;
    left: 3px;
    right: 3px;
    background: #1F2937;
    top: 80%;
    border-radius: 29px;
    z-index: 2;
    box-shadow: rgba(96, 75, 74, 0.1882352941) 0px 5px 5px 0px inset;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  }

  .card .bottom .content {
    position: absolute;
    bottom: 0;
    left: 1.5rem;
    right: 1.5rem;
    height: 160px;
  }

  .card .bottom .content .name {
    display: block;
    font-size: 1.2rem;
    color: white;
    font-weight: bold;
  }

  .card .bottom .content .about-me {
    display: block;
    font-size: 0.9rem;
    color: white;
    margin-top: 1rem;
  }

  .card .bottom .bottom-bottom {
    position: absolute;
    bottom: 1rem;
    left: 1.5rem;
    right: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card .bottom .bottom-bottom .social-links-container {
    display: flex;
    gap: 1rem;
  }

  .card .bottom .bottom-bottom .social-links-container svg {
    height: 20px;
    fill: white;
    filter: drop-shadow(0 5px 5px rgba(165, 132, 130, 0.1333333333));
    transition: transform 0.3s ease;
  }

  .card .bottom .bottom-bottom .social-links-container svg:hover {
    fill: #f55d56;
    transform: scale(1.2);
  }

  .card .bottom .bottom-bottom .button {
    background: #ef4444;   /* 👈 red accent button */
  color: #fff;
    border: none;
    border-radius: 20px;
    font-size: 0.6rem;
    padding: 0.4rem 0.6rem;
    box-shadow: rgba(165, 132, 130, 0.1333333333) 0px 5px 5px 0px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .card .bottom .bottom-bottom .button:hover {
     background: #DC2626; 
    color: white;
  }

  .card:hover {
    border-top-left-radius: 55px;
  }

  .card:hover .bottom {
    top: 20%;
    border-radius: 80px 29px 29px 29px;
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
  }

  .card:hover .profile-pic {
    width: 100px;
    height: 100px;
    aspect-ratio: 1;
    top: 10px;
    left: 10px;
    border-radius: 50%;
    z-index: 3;
    border: 7px solid #fbb9b6;
    box-shadow: rgba(96, 75, 74, 0.1882352941) 0px 5px 5px 0px;
    transition: all 0.5s ease-in-out, z-index 0.5s ease-in-out 0.1s;
  }

  .card:hover .profile-pic:hover {
    transform: scale(1.3);
    border-radius: 0px;
  }

  .card:hover .profile-pic img {
    transform: scale(2.5);
    object-position: 0px 25px;
    transition: all 0.5s ease-in-out 0.5s;
  }
    .card .profile-pic img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  object-position: center top;  /* 👈 initially full fit */
  transition: all 0.5s ease-in-out 0s;
}

.card:hover .profile-pic img {
  transform: scale(1.0); /* 👈 zoom in for face */
  object-position: center -20%; /* 👈 shift focus to face */
  transition: all 0.5s ease-in-out 0.5s;
}

`;

export default TeamCard;
