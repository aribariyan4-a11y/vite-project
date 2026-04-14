const Footer = () => {
    const productLinks = ["Features", "Pricing", "Templates", "Integrations"];
    const companyLinks = ["About", "Blog", "Careers", "Press"];
    const resourceLinks = ["Documentation", "Help Center", "Community", "Contact"];

    return (
        <footer
            style={{
                background: "#0D1117",
                color: "#fff",
                fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
                padding: "60px 80px 0",
            }}
        >

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: '2fr 1fr 1fr 1fr 1.2fr',
                    gap: "40px",
                    maxWidth: "1200px",
                    margin: "0 auto",
                }}
            >

                <div>
                    <h2
                        style={{
                            fontSize: "28px",
                            fontWeight: 800,
                            marginBottom: "14px",
                            letterSpacing: "-0.5px",
                            color: "#fff",
                        }}
                    >
                        DigiTools
                    </h2>
                    <p
                        style={{
                            color: "rgba(255,255,255,0.45)",
                            fontSize: "12px",
                            lineHeight: 1.75,
                            maxWidth: "250px",
                        }}
                    >
                        Premium digital tools for creators, professionals, and businesses.
                        Work smarter with our suite of powerful tools.
                    </p>
                </div>


                <LinkColumn title="Product" links={productLinks} />


                <LinkColumn title="Company" links={companyLinks} />


                <LinkColumn title="Resources" links={resourceLinks} />


                <div>
                    <p
                        style={{
                            fontWeight: 600,
                            fontSize: "15px",
                            marginBottom: "20px",
                            color: "#fff",
                        }}
                    >
                        Social Links
                    </p>
                    <div style={{ display: "flex", gap: "12px" }}>
                        <SocialIcon><YoutubeSVG /></SocialIcon>
                        <SocialIcon><FacebookSVG /></SocialIcon>
                        <SocialIcon><XSVG /></SocialIcon>
                    </div>
                </div>
            </div>


            <div
                style={{
                    maxWidth: "1200px",
                    margin: "50px auto 0",
                    height: "1px",
                    background: "rgba(255,255,255,0.1)",
                }}
            />


            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "24px 0",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "12px",
                }}
            >
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "16px" }}>
                    © 2026 Digitools. All rights reserved.
                </p>
                <div style={{ display: "flex", gap: "28px" }}>
                    {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
                        <a
                            key={item}
                            href="#"
                            style={{
                                color: "rgba(255,255,255,0.35)",
                                fontSize: "14px",
                                textDecoration: "none",
                                transition: "color 0.2s",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.color = "rgba(255,255,255,0.35)")
                            }
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};


const LinkColumn = ({ title, links }) => (
    <div>
        <p
            style={{
                fontWeight: 600,
                fontSize: "15px",
                marginBottom: "20px",
                color: "#fff",
            }}
        >
            {title}
        </p>
        <ul
            style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "14px",
            }}
        >
            {links.map((link) => (
                <li key={link}>
                    <a
                        href="#"
                        style={{
                            color: "rgba(255,255,255,0.45)",
                            textDecoration: "none",
                            fontSize: "14px",
                            transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.color = "rgba(255,255,255,0.45)")
                        }
                    >
                        {link}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

const SocialIcon = ({ children }) => (
    <div
        style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "#1C2333",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "background 0.2s, transform 0.2s",
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.background = "#6B3FF6";
            e.currentTarget.style.transform = "scale(1.12)";
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.background = "#1C2333";
            e.currentTarget.style.transform = "scale(1)";
        }}
    >
        {children}
    </div>
);

const YoutubeSVG = () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="white">
        <path d="M23.5 6.2s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.3-1C17.5 2.7 12 2.7 12 2.7s-5.5 0-8.3.2c-.4.1-1.4.1-2.3 1C.7 4.6.5 6.2.5 6.2S.3 8 .3 9.9v1.8c0 1.8.2 3.7.2 3.7s.2 1.6.9 2.3c.9.9 2 .9 2.5 1C5.5 19 12 19 12 19s5.5 0 8.3-.3c.4-.1 1.4-.1 2.3-1 .7-.7.9-2.3.9-2.3s.2-1.8.2-3.7V9.9c0-1.8-.2-3.7-.2-3.7zM9.7 14.6V8.1l6.3 3.3-6.3 3.2z" />
    </svg>
);

const FacebookSVG = () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="white">
        <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.27h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z" />
    </svg>
);

const XSVG = () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="white">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

export default Footer;