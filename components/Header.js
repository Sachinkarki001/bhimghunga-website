/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import NepaliDate from 'nepali-date-converter'
export default function Header()
{
    let date = new NepaliDate(Date.now()) 
return(
    <>
	<div className="header-container">
        <header className="kmc-header">
            <div className="top-header">
                <div className="wrapper">
                    <div className="contact-info">
                        <div className="icon-with-content">
                            {date.format('DD MMMM YYYY, ddd') }
                        
                    <div className="tag-line-mobile">
                    <p>
						साँस्कृतिक सहर,
                        भीमढुंगा  नगर
                        </p>
                    </div>
                    
                    <div className="social-icons"></div>
                    </div>
                     </div> 
                     <div className="tag-line">
                    <p>
						साँस्कृतिक सहर,
                        भीमढुंगा  नगर
                        </p>    
                        </div>
                                    
                <div className= "top-header-right">
                    <div className="translator">
                        <a href="/">English</a>
                        <a className="current" href="/">Nepali</a>
                    </div>
                    
                    <div className="search-box">
                    <img src="https://kathmandu.gov.np/wp-content/themes/kmc-theme/images/ic_search.svg" alt="search icon">
                    </img>
                    
                        <form action="/" method="get">
                            <input name="s"  value="" type="search" placeholder="search" autoComplete="off"></input>
                        </form>
                    </div>
                </div>           
              </div>
            </div>
            <div className="main-header">
                <div className="wrapper">
                    <div className="logo-title-wrapper">
                    <div className="logo">
                       <a href='/' className='custom-logo-link' rel='home' aria-current="page">
                           <img width={100} height={84}
                           src="https://kathmandu.gov.np/wp-content/uploads/2021/02/cropped-logo.png"
                           className='custom-logo' alt='bhimdhunga ward'></img>
                           </a> 
                    </div>
                    <div className='title'>
                       <h1>                        
                       भीमढुंगा वार्ड,
                        वाग्मती प्रदेश   <br/>
                        <a className='external-link-btn' href="http://kmc-aawedan.himalayanit.com/" target="_blank" rel="noreferrer">अनलाइन आवेदन प्रणाली</a>                   
                        </h1>
                       </div>
                    </div>
                <div className='flag-wrapper'>
                    <img src="https://kathmandu.gov.np/wp-content/themes/kmc-theme/images/flag-nepal.gif" alt='nepal-logo'>
                    </img>
                    </div>
                </div>
            </div>
            <div className='overlay'></div>
        </header>
        <div className='news-slider-wrapper'>
            <div className='wrapper'>
            <h2>News
            </h2>
			<marquee behavior="scroll" scrolldelay="100" scrollamount="6">
                <ul className='news-list'>

    <li>
        <a href="https://kathmandu.gov.np/notice/6742/?lang=en" style={{color:"white"}}>उपस्थित भै दिने सम्बन्धमा ।</a></li>	
    <li>
        <a href="https://kathmandu.gov.np/notice/"style={{color:"white"}}>नाम दर्ता गराउने बारे ।</a>
    </li>
<li>
        <a href="https://kathmandu.gov.np/notice/"style={{color:"white"}}>
मिति २०७८-११-०४ गतेको कोभिड-१९ विरुद्धको फाइजर दोश्रो मात्रा खोप अभियानको वडागत विवरण ।</a>
</li>
	<li>
        <a href="https://kathmandu.gov.np/notice/"style={{color:"white"}}>पेश्की लगत सम्बन्धमा । </a>
        </li>
	<li>
        <a href="https://kathmandu.gov.np/notice/"style={{color:"white"}}>मिति २०७८-११-०३ गतेको कोभिड-१९ विरुद्धको फाइजर दोश्रो मात्रा खोप अभियानको वडागत विवरण ।</a>
        </li>
	<li>
        <a href="https://kathmandu.gov.np/notice/"style={{color:"white"}}>एन्टीजेन परीक्षण सम्बन्धी मिति २०७८/ ११ / ०१  गतेको वडागत विवरण ।</a>
        </li>
    		    </ul>
            </marquee>
                </div> 
        </div>
    </div>
    </> 
);
}