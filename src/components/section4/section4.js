import React from 'react'
import '../section4/style.css'
import Img1 from '../../images/01.jpg'
import Img2 from '../../images/02.jpg'
import Img3 from '../../images/03.jpg'
import Img4 from '../../images/04.jpg'
import '../section4/Responsive.css'

export default () => {
    return (
        <>
            <div className="section4-main">
                <div className="section-title">
                    MENU
                <hr className="title-line"></hr>
                </div>
                <div className=" container menu-section-title d-flex">
                    <div className="menu-section-left col-xs-12 col-sm-6">
                        <div className="menu-section-left-heading">
                            BREAKFAST & STARTERS
                            <hr className="title-line"></hr>
                        </div>
                        <div className="menu-item">
                            <div className="menu-item-price">
                                $9
                            </div>
                            <div className="menu-item-name">Tortellini Skewers</div>
                            <div className="menu-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.</div>
                        </div>
                        <div className="menu-item">
                            <div className="menu-item-price">
                                $7
                            </div>
                            <div className="menu-item-name">Fried Ravioli</div>
                            <div className="menu-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.</div>
                        </div>
                        <div className="menu-item">
                            <div className="menu-item-price">
                                $9
                            </div>
                            <div className="menu-item-name">Fried Ravioli</div>
                            <div className="menu-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.</div>
                        </div>
                        <div className="menu-item">
                            <div className="menu-item-price">
                                $10
                            </div>
                            <div className="menu-item-name">Fried Ravioli</div>
                            <div className="menu-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.</div>
                        </div>
                    </div>

                    <div className="menu-section-left col-xs-12 col-sm-6">
                        <div className="menu-section-left-heading">
                                     MAIN COURSE
                            <hr className="title-line"></hr>
                        </div>
                        <div className="menu-item">
                            <div className="menu-item-price">
                                $17
                            </div>
                            <div className="menu-item-name">Roast Stuffed Chicken</div>
                            <div className="menu-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.</div>
                        </div>
                        <div className="menu-item">
                            <div className="menu-item-price">
                                $20
                            </div>
                            <div className="menu-item-name">Chicken & Mushroom Pasta</div>
                            <div className="menu-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.</div>
                        </div>
                        <div className="menu-item">
                            <div className="menu-item-price">
                                $14
                            </div>
                            <div className="menu-item-name">Beef Lasagne</div>
                            <div className="menu-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.</div>
                        </div>
                        <div className="menu-item">
                            <div className="menu-item-price">
                                $19
                            </div>
                            <div className="menu-item-name">Chicken Goujons</div>
                            <div className="menu-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.</div>
                        </div>
                    </div>
                </div>
                {/* #########################################*DINNER & DESSERT*################################################ */}

                <div className=" container menu-section-title-B d-flex">
                    <div className="menu-section-left col-xs-12 col-sm-6">
                        <div className="menu-section-left-heading">
                        DINNER
                            <hr className="title-line"></hr>
                        </div>
                        <div className="menu-item">
                            <div className="menu-item-price">
                                $15
                            </div>
                            <div className="menu-item-name">Sesame-Ginger Beef</div>
                            <div className="menu-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.</div>
                        </div>
                        <div className="menu-item">
                            <div className="menu-item-price">
                                $17
                            </div>
                            <div className="menu-item-name">Crispy Fried Chicken</div>
                            <div className="menu-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.</div>
                        </div>
                        <div className="menu-item">
                            <div className="menu-item-price">
                                $18
                            </div>
                            <div className="menu-item-name">Mongolian Shrimp & Broccoli</div>
                            <div className="menu-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.</div>
                        </div>
                        <div className="menu-item">
                            <div className="menu-item-price">
                                $20
                            </div>
                            <div className="menu-item-name">Spicy Coconut Salmon</div>
                            <div className="menu-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.</div>
                        </div>
                    </div>

                    <div className="menu-section-left col-xs-12 col-sm-6">
                        <div className="menu-section-left-heading">
                        DESSERTS
                            <hr className="title-line"></hr>
                        </div>
                        <div className="menu-item">
                            <div className="menu-item-price">
                                $11
                            </div>
                            <div className="menu-item-name">Chocolate Mud Cake</div>
                            <div className="menu-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.</div>
                        </div>
                        <div className="menu-item">
                            <div className="menu-item-price">
                                $14
                            </div>
                            <div className="menu-item-name">Bourbon-Pecan Tart</div>
                            <div className="menu-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.</div>
                        </div>
                        <div className="menu-item">
                            <div className="menu-item-price">
                                $15
                            </div>
                            <div className="menu-item-name">Texas Sheet Cake</div>
                            <div className="menu-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.</div>
                        </div>
                        <div className="menu-item">
                            <div className="menu-item-price">
                                $18
                            </div>
                            <div className="menu-item-name">Vanilla Cheesecake</div>
                            <div className="menu-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.</div>
                        </div>
                    </div>
                </div>
                                    <div className="container">
                                    <div className="row gallery-images">
                                        <div className="col-xs-6 col-md-3">
                                            <div className="gallery-item">
                                        <img className="food-items" src={Img1} alt="gallery-item1" />
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-md-3">
                                            <div className="gallery-item">
                                        <img  className="food-items" src={Img2} alt="gallery-item2" />
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-md-3">
                                            <div className="gallery-item">
                                        <img  className="food-items" src={Img3} alt="gallery-item3" />
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-md-3">
                                            <div className="gallery-item">
                                        <img  className="food-items" src={Img4} alt="gallery-item4" />
                                            </div>
                                        </div>
                                    </div>
                                    </div>
            </div>
        </>
    )
}
