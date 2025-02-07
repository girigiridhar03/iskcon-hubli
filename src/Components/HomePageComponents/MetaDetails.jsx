import React from 'react';

const MetaDetails = ({ isHomePage }) => {
    const title = isHomePage ? "Home Page Title" : "detail-page :SHASHIDHAR PATIL'S CAMPAIGN TO BUILD A MAGNIFICENT SRI RADHA KRISHNA TEMPLE AND CULTURAL COMPLEX IN HUBLI-DHARWAD, KARNATAKA. by ISKCON HUBLI-DHARWAD | Crowdfunding India";
    const description = isHomePage ? "Home Page Description" : "detail-page : I am a concerned citizen and this campaign of mine aims to support the creation of a magnificent ISKCON Sri Radha Krishna Temple and Cultural complex in Hubli-Dharwad area of Karnataka. Crowdfunding India!";
    const image = isHomePage ? "https://www.iskconhubli.org/iskon/wp-content/uploads/2021/11/13-Krishna-Janmastami.jpg" : "https://www.iskconhubli.org/iskon/wp-content/uploads/2021/11/15-Radhashtami.jpg";

    const url= 'https://www.iskconhubli.org/iskon/wp-content/uploads/2021/11/3-Gita-Jayanti.jpg'

    return (
        <>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta property="og:image" content={image} />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content="crowdfunding in india, crowdfunding india, crowd funding, what is crowdfunding, social crowdfunding, crowdsourcing" />
            <meta http-equiv="Cache-control" content="public" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
            <meta name="url" content={url} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="author" content="ISKCON-HUBLI-DHARWAD" />
            <meta name="title" content={title} />
            <link rel="publisher" href="https://plus.google.com/113864682909434598595/" />
            <link rel="canonical" href={url} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:site" content="@ISKCON-HUBLI-DHARWAD" />
            <meta property="twitter:account_id" content="3024809816" />
            <meta property="twitter:site:id" content="3024809816" />
            <meta name="twitter:image:src" content={image} />
            <meta property="twitter:text:title" content={title} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:creator" content="@ISKCON-HUBLI-DHARWAD" />
            <meta name="og:title" content={title} />
            <meta name="og:image" content={image} />
            <meta name="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="en_IN" />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content={title} />
            <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
            <meta property="place:location:latitude" content="12.934862" />
            <meta property="place:location:longitude" content="77.6157602" />
            <meta property="business:contact_data:street_address" content="5th Block, Koramangala," />
            <meta property="business:contact_data:locality" content="Bengaluru" />
            <meta property="business:contact_data:postal_code" content="560095" />
            <meta property="business:contact_data:country_name" content="India" />
            <meta property="business:contact_data:email" content="vineeth@ISKCON-HUBLI-DHARWAD.com" />
            <meta property="business:contact_data:phone_number" content="+919742772333" />
            <meta property="business:contact_data:website" content="https://www.ISKCON-HUBLI-DHARWAD.com/" />
            <link rel="apple-touch-icon" sizes="57x57" href="https://fadcdn.s3.amazonaws.com/icons_seo/Online-crowdfunding-in-India-ISKCON-HUBLI-DHARWAD-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="https://fadcdn.s3.amazonaws.com/icons_seo/Online-crowdfunding-in-India-ISKCON-HUBLI-DHARWAD-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="https://fadcdn.s3.amazonaws.com/icons_seo/Online-crowdfunding-in-India-ISKCON-HUBLI-DHARWAD-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="https://fadcdn.s3.amazonaws.com/icons_seo/Online-crowdfunding-in-India-ISKCON-HUBLI-DHARWAD-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="https://fadcdn.s3.amazonaws.com/icons_seo/Online-crowdfunding-in-India-ISKCON-HUBLI-DHARWAD-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="https://fadcdn.s3.amazonaws.com/icons_seo/Online-crowdfunding-in-India-ISKCON-HUBLI-DHARWAD-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="https://fadcdn.s3.amazonaws.com/icons_seo/Online-crowdfunding-in-India-ISKCON-HUBLI-DHARWAD-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="https://fadcdn.s3.amazonaws.com/icons_seo/Online-crowdfunding-in-India-ISKCON-HUBLI-DHARWAD-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="https://fadcdn.s3.amazonaws.com/icons_seo/Online-crowdfunding-in-India-ISKCON-HUBLI-DHARWAD-180x180.png" />
            <link rel="icon" type="image/png" href="https://fadcdn.s3.amazonaws.com/icons_seo/Online-crowdfunding-in-India-ISKCON-HUBLI-DHARWAD-32x32.png" sizes="32x32" />
            <link rel="icon" type="image/png" href="https://fadcdn.s3.amazonaws.com/icons_seo/Online-crowdfunding-in-India-ISKCON-HUBLI-DHARWAD-192x192.png" sizes="192x192" />
            <link rel="icon" type="image/png" href="https://fadcdn.s3.amazonaws.com/icons_seo/Online-crowdfunding-in-India-ISKCON-HUBLI-DHARWAD-96x96.png" sizes="96x96" />
            <link rel="icon" type="image/png" href="https://fadcdn.s3.amazonaws.com/icons_seo/Online-crowdfunding-in-India-ISKCON-HUBLI-DHARWAD-16x16.png" sizes="16x16" />
            <link rel="manifest" href="https://www.ISKCON-HUBLI-DHARWAD.com/manifest.json" />
            <link rel="mask-icon" href="https://www.ISKCON-HUBLI-DHARWAD.com/favicon/safari-pinned-tab.svg" color="#000000" />
            <meta name="msapplication-TileColor" content="#f0545f" />
            <meta name="msapplication-TileImage" content="https://www.ISKCON-HUBLI-DHARWAD.com/favicon/mstile-144x144.png" />
            <meta name="msapplication-config" content="https://www.ISKCON-HUBLI-DHARWAD.com/browserconfig.xml" />
            <meta name="theme-color" content="#ffffff" />
            <link rel="shortcut icon" type="image/x-icon" href="https://fadcdn.s3.amazonaws.com/assets/img/favicon.ico" />
        </>
    );
};

export default MetaDetails;
