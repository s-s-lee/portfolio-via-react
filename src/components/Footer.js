import React from 'react';
import { Container } from 'react-bootstrap';

export default function Footer() {
    return (
        <Container>
            <footer className="w-100 mt-auto text-dark pt-4">
                <div className="container text-center mb-5">
                    Susan's Portfolio 🌺 <br></br>
                    <a href="https://github.com/s-s-lee"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Github" className="icon" /></a>
                    <a href="https://www.linkedin.com/in/susan-l-9074b523b/"><img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" alt="LinkedIn" className="icon" /></a>
                </div>
            </footer>
        </Container>
    );
}