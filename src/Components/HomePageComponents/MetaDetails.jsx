import React, { useEffect } from 'react';

const MetaDetails = ({ isHomePage }) => {
    const title = isHomePage ? "Home Page Title" : "detail-page :SHASHIDHAR PATIL'S CAMPAIGN TO BUILD A MAGNIFICENT SRI RADHA KRISHNA TEMPLE AND CULTURAL COMPLEX IN HUBLI-DHARWAD, KARNATAKA. by ISKCON HUBLI-DHARWAD | Crowdfunding India";
    const description = isHomePage ? "Home Page Description" : "detail-page : I am a concerned citizen and this campaign of mine aims to support the creation of a magnificent ISKCON Sri Radha Krishna Temple and Cultural complex in Hubli-Dharwad area of Karnataka. Crowdfunding India!";
    const image = isHomePage ? "https://www.iskconhubli.org/iskon/wp-content/uploads/2021/11/13-Krishna-Janmastami.jpg" : "https://www.iskconhubli.org/iskon/wp-content/uploads/2021/11/15-Radhashtami.jpg";
    const url = 'https://www.iskconhubli.org/iskon/wp-content/uploads/2021/11/3-Gita-Jayanti.jpg';

    useEffect(() => {
        document.title = title;

        const metaTags = [
            { name: "title", content: title },
            { name: "description", content: description },
            { property: "og:image", content: image },
            { name: "keywords", content: "crowdfunding in india, crowdfunding india, crowd funding, what is crowdfunding, social crowdfunding, crowdsourcing" },
            { httpEquiv: "Cache-control", content: "public" },
            { httpEquiv: "X-UA-Compatible", content: "IE=edge" },
            { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" },
            { name: "url", content: url },
            { name: "author", content: "ISKCON-HUBLI-DHARWAD" },
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:description", content: description },
            { name: "twitter:site", content: "@ISKCON-HUBLI-DHARWAD" },
            { property: "twitter:account_id", content: "3024809816" },
            { property: "twitter:site:id", content: "3024809816" },
            { name: "twitter:image:src", content: image },
            { property: "twitter:text:title", content: title },
            { name: "twitter:title", content: title },
            { name: "twitter:creator", content: "@ISKCON-HUBLI-DHARWAD" },
            { name: "og:title", content: title },
            { name: "og:image", content: image },
            { name: "og:description", content: description },
            { property: "og:type", content: "website" },
            { property: "og:locale", content: "en_IN" },
            { property: "og:url", content: url },
            { property: "og:site_name", content: title },
            { httpEquiv: "Content-Security-Policy", content: "upgrade-insecure-requests" },
            { property: "place:location:latitude", content: "12.934862" },
            { property: "place:location:longitude", content: "77.6157602" },
            { property: "business:contact_data:street_address", content: "5th Block, Koramangala," },
            { property: "business:contact_data:locality", content: "Bengaluru" },
            { property: "business:contact_data:postal_code", content: "560095" },
            { property: "business:contact_data:country_name", content: "India" },
            { property: "business:contact_data:email", content: "vineeth@ISKCON-HUBLI-DHARWAD.com" },
            { property: "business:contact_data:phone_number", content: "+919742772333" },
            { property: "business:contact_data:website", content: "https://www.ISKCON-HUBLI-DHARWAD.com/" },
            { name: "msapplication-TileColor", content: "#f0545f" },
            { name: "msapplication-TileImage", content: "https://www.ISKCON-HUBLI-DHARWAD.com/favicon/mstile-144x144.png" },
            { name: "msapplication-config", content: "https://www.ISKCON-HUBLI-DHARWAD.com/browserconfig.xml" },
            { name: "theme-color", content: "#ffffff" }
        ];

        metaTags.forEach(tag => {
            const metaElement = document.createElement('meta');
            Object.keys(tag).forEach(key => {
                metaElement.setAttribute(key, tag[key]);
            });
            document.head.appendChild(metaElement);
        });

        return () => {
            metaTags.forEach(tag => {
                const metaElement = document.querySelector(`meta[content="${tag.content}"]`);
                if (metaElement) {
                    document.head.removeChild(metaElement);
                }
            });
        };
    }, [title, description, image, url]);

    return null;
};

export default MetaDetails;
