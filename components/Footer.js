/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

export default function Footer()
{
    return(
        <footer id="site-footer" className="site-footer" role="contentinfo">
            <div className="wrapper">
                <div className="footer-container">
                    <div className="contact">
                        <h1>
                        भीमढुङ्गा: नागार्जुन नगरपालिका, काठमाडौं जिल्ला, नेपाल
                        </h1>
                        <p>नागार्जुन नगरपालिका, काठमाडौं जिल्ला,नेपाल</p>
              <div className="contact-box">
                  <div>
                      <span className="span-wrap">
                          <img src="https://kathmandu.gov.np/wp-content/themes/kmc-theme/images/ic_phone.svg"></img>
                          <span>फोन:</span>
                      </span>
                      <span className="span-wrap">
<img src="https://kathmandu.gov.np/wp-content/themes/kmc-theme/images/ic_fax.svg"></img>
<span>फ्याक्स:</span>
                      </span>
  <span className="span-wrap"><img src="https://kathmandu.gov.np/wp-content/themes/kmc-theme/images/ic_mail.svg"></img>
							<span>ईमेल: </span>
						</span>               
                  </div>
                  <div>
                      <small>+977 14231481</small>
                      <br/>
                      <small>+977 14231481</small>
                      <br/>
                         <small>ceo@kathmandu.gov.np</small>
                  </div>
                           </div> 
                    </div>
                 <div className="google-map">
                     <h1>
                         Google Map
                     </h1>
                     <div className="mapouter">
                         <div className="gmap_canvas">
                       <iframe width="350" height="225" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61950.2024301905!2d85.23601891209081!3d27.731807908702176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb23ce15020783%3A0x968dd0136b3ec100!2sBhimdhunga%2C%20Nepal!5e1!3m2!1sen!2sus!4v1645115701381!5m2!1sen!2sus" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                         </div>
                     </div>
                     </div>   
                </div>
            </div>
        </footer>
    )
}