import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div>
        <footer class="footer" id="footer">
            <div class="container bottom_border">
                <div class="row">
                <div class=" col-sm-4 col-md  col-6 col">
                        <h5 class="headin5_amrc col_white_amrc pt2">Quick links</h5>

                        <ul class="footer_ul_amrc">
                            <li><a href="/">Home</a></li>
                            
                            <li><a href="#">course</a></li>
                            <li><a href="#">ATAl Tinkering Lab</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms And Condition</a></li>
                            <li><a href="#">For Partnership</a></li>
                            <li><a href="./Bookyourfreesession">Book Your Free session Now</a></li>
                        </ul>

                    </div>
                    <div class=" col-sm-4 col-md col-sm-4  col-12 col">
                        <h5 class="headin5_amrc col_white_amrc pt2">Contact Us</h5>

                        <p><strong>Email : </strong>qnovatelabs@gmail.com</p>
                        <p>Campus:11, KIIT-TBI, Room No:301, Patia, Bhubanewar, Odisha, 751024</p>


                    </div>


                    


                    <div class=" col-sm-4 col-md  col-6 col">
                        <h5 class="headin5_amrc col_white_amrc pt2">Follow Us</h5>

                        <ul class="footer_ul_amrc">
                            <li><a href='#'>Youtube</a></li>
                            <li><a href='#'>Facebook</a></li>
                            <li><a href='#'>instagram</a></li>
                        </ul>

                    </div>

                </div>
            </div>
            <div class="container">
                <ul class="foote_bottom_ul_amrc">
                    <li><a href="/">Home</a></li>
                    <li><a href="/aboutUs">About</a></li>
                    <li><a href="#contactus">Contact Us</a></li>
                    <li><a href="#">Blog</a></li>
                    
                </ul>

                <p class="text-center">Copyright @ Fluidex Technologies Pvt.Ltb @ 2022. All Rights Reserved. Made with Love In India</p>

                <ul class="social_footer_ul">
                    <li class="first-li"><a href="/"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="/"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="/"><i class="fab fa-linkedin"></i></a></li>
                    <li><a href="/"><i class="fab fa-instagram"></i></a></li>
                </ul>

            </div>

        </footer >
    </div >
  )
}

export default Footer