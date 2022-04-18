import React from 'react'
import { SectionStyled } from '../Layouts';
import GradientCard from './GradientCard';
import MainTitle from './MainTitle';
import avatar from '../img/avata.png';
import styled from 'styled-components';
import CtaButton from './CtaButton';
import person from '../img/1.svg';
import person2 from '../img/2.svg';
import bitcoin2 from '../img/3.svg';
import bitcoin from '../img/4.svg';
import person3 from '../img/5.svg';
import computer from '../img/6.svg';

function GradientCardsSection() {
    return (
        <GradientCardsSectionStyled>
            <SectionStyled>
                <div className="title-con">
                    <MainTitle title={'Recipient List'} subtitle={'Information of Recipient'} para={'All Necessary Informations of Recipient.'} />
                </div>
                <div className="gradient-cards-con">
                    <GradientCard image={person} avatar={avatar} name={'@Mahamud'} price={'0 Tk'} title={'Just a dummy title'} />
                    <GradientCard image={person2} avatar={avatar} name={'@Tomal'} price={'0 Tk'} title={'Just a dummy title'}  />
                    <GradientCard image={person3} avatar={avatar} name={'@Poran'} price={'0 Tk'} title={'Just a dummy title'}  />
                    <GradientCard image={computer} avatar={avatar} name={'@Eshita'} price={'0 Tk'} title={'Just a dummy title'}  />
                    <GradientCard image={bitcoin2} avatar={avatar} name={'@Anika'} price={'0 Tk'} title={'Just a dummy title'} />
                    <GradientCard image={bitcoin} avatar={avatar} name={'@Arpi'} price={'0 Tk'} title={'Just a dummy title'}  />
                    <GradientCard image={person} avatar={avatar} name={'@Fahim'} price={'0 Tk'} title={'Just a dummy title'}  />
                    <GradientCard image={bitcoin2} avatar={avatar} name={'@Mitu'} price={'0 Tk'} title={'Just a dummy title'}  />
                </div>
                <div className="load">
                    <CtaButton name={'View More'} />
                </div>
            </SectionStyled>
        </GradientCardsSectionStyled>
    )
}

const GradientCardsSectionStyled = styled.div`
    .load{
        padding-top: 3rem;
        text-align: center;
    }
`;

export default GradientCardsSection;
