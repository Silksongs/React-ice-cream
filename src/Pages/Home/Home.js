import React from 'react';
import CarouselBox from "../../Components/CarouselBox/CarouselBox";
import {Container} from "react-bootstrap";
import './Home.css'
import HomeComp from "../../Components/Home/HomeComp";

function Home() {

    return (
        <div>
            <CarouselBox/>
            <Container>
                <article>
                    <HomeComp text1={"Немного информации"}
                              text2={"МОРОЖЕНКА — это бренд легендарного десерта, который обожают взрослые и дети\n" +
                              "                        по всему миру."}
                              text3={"Это десятки уникальных вкусов и ароматов, высокое качество натуральных ингредиентов, современные\n" +
                              "                        фабрики во\n" +
                              "                        многих странах,\n" +
                              "                        в том числе России (в Москве работает самое крупное в Европе производство). Хотите узнать\n" +
                              "                        историю фирмы?\n" +
                              "                        Мы расскажем, как начинали свой маленький бизнес, как превратилось маленькое кафе с мороженым\n" +
                              "                        в узнаваемый бренд."}
                    />
                    <HomeComp text1={"Производство"}
                              text3={"С самых первых лет мороженое бренда МОРОЖЕНКА изготавливается только из натурального сырья.\n" +
                              "                        В рецептуру входят сливки, фрукты, ягоды, орехи, сиропы. Искусственные добавки, пальмовое масло\n" +
                              "                        и прочие\n" +
                              "                        сомнительные компоненты исключены.\n" +
                              "                        На фабриках используется старинная рецептура — вы можете не беспокоиться за свое здоровье."}
                    />
                </article>
            </Container>
        </div>
    );

}

export default Home;