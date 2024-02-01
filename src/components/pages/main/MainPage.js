import React from 'react'
import Megaphone from "../../megaphone/Megaphone";
import Banner from "../../banner/Banner";
import ExperienceAndEducation from "../../exp/ExperienceAndEducation";
import Quote from "../../quote/Quote";
import Banner2 from "../../banner/Banner2";
import Reviews from "../../review/Reviews";
import Tools from "../../tools/Tools";
import FullWidthImg from "../../fullWidthImg/FullWidthImg";
import CoachCards from "../../coachCard/CoachCards";
import JustImagine from "../../justimagine/JustImagine";
import ApplyFor from "../../applyFor/ApplyFor";
import fullWidthImg1 from "../../fullWidthImg/img/img1.jpg"
import fullWidthImg2 from "../../fullWidthImg/img/img2.jpg"
import Animation from "../../animation/Animation";
import AppBg from "../../appBg/AppBg";
import t from "../../../hooks/useT";

export default function MainPage() {
    return (
        <>
            <Animation
            // type="scale151"
            // type="opacity"
            >
                <Banner />
            </Animation>
            <Animation
            // type="scale151"
            // type="opacity"
            >
                <ExperienceAndEducation />
            </Animation>
            <Animation
            // type="scale151"
            // type="opacity"
            >
                <div className="h50vh fcc mt200">
                    <Quote title="Steve Jobs" text={t("Your work")} />
                </div>
            </Animation>
            <Animation
            // type="scale151"
            // type="opacity"
            >
                <Banner2 />
            </Animation>
            <Animation
            // type="scale151"
            // type="opacity"
            >
                <Tools />
            </Animation>
            <Animation
            // type="scale151"
            // type="opacity"
            >
                <FullWidthImg img={fullWidthImg1} />
            </Animation>
            <Animation
            // type="scale151"
            // type="opacity"
            >
                <Quote title="Confucius" text={t("Choose a job")} />
            </Animation>
            <Animation
            // type="scale091"
            // type="opacity"
            >
                <Reviews />
            </Animation>
            <Animation
            // type="scale151"
            // type="opacity"
            >
                <Megaphone />
            </Animation>
            <Animation
            // type="scale151"
            // type="opacity"
            >
                <ApplyFor />
            </Animation>
            <Animation
            // type="scale151"
            // type="opacity"
            >
                <JustImagine />
            </Animation>
            <Animation
                // type="scale151"
                type="opacity"
            >
                <CoachCards />
            </Animation>

            {/* ! `margin top` for Quote */}
            <div className="h300"></div>
            <Animation
            // type="scale151"
            // type="opacity"
            >
                <Quote title="Albert Schweitzer" text={t("Success is not the key")} />
            </Animation>

            <Animation
            // type="scale151"
            // type="opacity"
            >
                <FullWidthImg img={fullWidthImg2} />
            </Animation>
            {/* fixed position */}
            <AppBg />
        </>
    )
}
