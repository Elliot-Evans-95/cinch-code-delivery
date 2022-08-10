import { Route } from '../router/router.type'
import me2 from './assets/me-2.webp'
import bombe from './assets/bombe.webp'
import punchCards from './assets/punch-cards.webp'
import netscape from './assets/netscape.webp'
import cloudComputing from './assets/cloud-computing.webp'
import scrum from './assets/scrum.webp'
import waterfall from './assets/waterfall.webp'
import qrCode from './assets/qr-code.png'
import kanban from './assets/kanban.png'
import githubActions from './assets/github-actions.webp'

// TODO - add notes per slide to store in local storage
export const routes: Readonly<Array<Route>> = [
    {
        id: 1,
        routeName: 'welcome',
        routeHTML: `
            <h1>Release the <s>Kraken</s> code!</h1>
        `,
        routeStyle: ``,
        isActive: true,
        routeNotes: 'Hello and welcome to my talk about how cinch release code',
    },
    {
        id: 2,
        routeName: 'aboutMe',
        routeHTML: `
            <div class="aboutMe">
                <h1>About me:</h1>
                <p>Elliot Evans</p>
                <img class="about-me--img" src='${me2}' alt="me"/>
                <p>Senior Software Engineer at cinch</p>
            </div>

        `,
        routeStyle: `
            .aboutMe p {
                font-size: 1.5rem;
                text-align: center;
            }
        
            .about-me--img {
                display: block;
                max-width: 20rem;
                width: 20vw;
                border: 1rem solid black;
                padding: 1rem;
                margin: auto;
            }
        `,
        isActive: false,
        routeNotes:
            'I am a Senior Software Engineer at cinch. Worked on the Product Details page. Worked on the checkout flow.',
    },
    {
        id: 3,
        routeName: 'toCover',
        routeHTML: `
            <h1>The talk is going to cover:</h1>

            <ul class="point">
                <li>How code used to be deployed</li>
                <li>How do we deploy code at cinch</li>
                <li>Other Agile methodologies</li>
                <li>Golden methodology</li>
                <li>The future</li>
            </ul>
        `,
        routeStyle: `
            .point {
                width: 50%;
                margin: 4rem auto;
                font-size: 1.5rem;
                line-height: 2.5rem;
            }
        `,
        isActive: false,
        routeNotes: 'In this talk I will be covering...',
    },
    {
        id: 4,
        routeName: 'briefHistory',
        routeHTML: `
            <h1>Brief History</h1>
            
            <div class="briefHistory">
                <ul>
                    <li>
                        1950s
                        <img class="about-me--img" src='${bombe}' alt="bombe"/>
                    </li>
                    <li>
                        1970s
                        <img class="about-me--img" src='${punchCards}' alt="punch cards"/>
                    </li>
                    <li>
                        1990s
                        <img class="about-me--img" src='${netscape}' alt="netscape"/>
                    </li>
                    <li>
                        2010s
                        <img class="about-me--img" src='${cloudComputing}' alt="cloud computing"/>
                    </li>
                </ul>
            </div>

        `,
        routeStyle: `
            .briefHistory {
                display: flex;
                flex-direction: row;
            }
            
            .briefHistory img {
                max-width: 10rem;
                
                display: block;
                border-radius: 1rem;
                margin: 1rem;
                box-shadow: 4px 8px 10px 2px rgb(21 101 192 / 20%);
            }
            
            .briefHistory ul {
                padding: 0;
                display: flex;
                flex: 1 0 auto;
            }
            
            .briefHistory li { 
                font-size: 1.5rem;
                margin: auto;
                width: 75%;
                margin-bottom: 1rem;
                display: block;
                text-align: center;
                line-height: 2.5rem;
                
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-evenly;
            }
            
            
        `,
        isActive: false,
        routeNotes: 'test',
    },
    {
        id: 5,
        routeName: 'codeProductionMethodologies',
        routeHTML: `
            <h1>How does code get to production?</h1>
            <h2>Here are two popular methodologies:</h2>
            
            <div class="codeProductionMethodologies--wrapper">
                <section class="codeProductionMethodologies--section">
                    <p>Waterfall</p>
                    <ul>
                        <li><img class="codeProductionMethodologies--section__img" src='${waterfall}' alt="waterfall"/></li>
                    </ul>
                </section>
                <section class="codeProductionMethodologies--section">
                    <p>Scrum</p>
                    <ul>
                        <li><img class="codeProductionMethodologies--section__img" src='${scrum}' alt="scrum"/></li>
                    </ul>
                </section>
            </div>
        `,
        routeStyle: `
            .codeProductionMethodologies--wrapper {
                display: flex;
                flex-direction: row;
                justify-content: center;
            }
            
            .codeProductionMethodologies--section {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                margin: 4rem;
            }
            
            .codeProductionMethodologies--section__img {
                max-width: 12rem;
                
                display: block;
                border-radius: 1rem;
                margin: 1rem;
                box-shadow: 4px 8px 10px 2px rgb(21 101 192 / 20%);
            }
            
            .codeProductionMethodologies--section p { 
                font-size: 1.5rem;
                line-height: 2rem;
                text-transform: capitalize;
                margin: 0;
            }
            
            .codeProductionMethodologies--section ul {
                padding: 0;
            }
            
            .codeProductionMethodologies--section li { 
                font-size: 1.25rem;
                line-height: 2rem;
                text-transform: capitalize;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        `,
        isActive: false,
        routeNotes:
            'waterfall: ' +
            '- Explanation over what waterfall is' +
            '- how does code get to production? - feature is worked on in its entirety then released in one go into master' +
            'scrum: ' +
            '- Explanation of what scrum is' +
            '- how does code into production? - Work is done in branches which is then collected into one release branch to then be merged into master (usually the last day in the scrum cycle)',
    },
    {
        id: 6,
        routeName: 'cinchDeliverCode',
        routeHTML: `
            <h1>How does cinch deliver code to production?</h1>
            <div class="cinchDeliverCode--wrapper">
                <div>
                    <section class="cinchDeliverCode--section cinchDeliverCode--section__first">
                        <h3>Kanban</h3>
                        <ul>
                            <li>Means "visual board"</li>
                            <li>Lean workflow for delivering code</li>
                            <li>Incremental changes</li>
                        </ul>
                    </section>                    
                    <section class="cinchDeliverCode--section">
                        <h3>Front-end</h3>
                        <ul>
                            <li>Work on branches</li>
                            <li>Github Actions are run on PRs</li>
                            <li>Deployed by Automation</li>
                        </ul>
                    </section>
                    <section class="cinchDeliverCode--section">
                        <h3>Back-end</h3>
                        <ul>
                            <li>Work on master directly</li>
                            <li>Github Actions are run on Master</li>
                            <li>Deployed by CI</li>
                            <li>Something about CD ?</li>
                        </ul>
                    </section>
                </div>
                <aside class="cinchDeliverCode--aside">
                    <img src='${kanban}' alt="Image of Kanban">
                    <img src='${githubActions}' alt="Image of font-end's delivery">
                </aside>
            </div>

        `,
        routeStyle: `
            .cinchDeliverCode--wrapper {
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                align-items: center;
            }
            
            .cinchDeliverCode--section {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
            }
            
            .cinchDeliverCode--section h3 { 
                font-size: 1.5rem;
                line-height: 2rem;
                text-transform: capitalize;
                margin: 1rem 0;
            }            
            
            .cinchDeliverCode--section__first h3 { 
                margin: 2rem 0 1rem 0;
            }
            
            .cinchDeliverCode--section li { 
                font-size: 1.25rem;
                line-height: 2rem;
                text-transform: capitalize;
            }            
            
            .cinchDeliverCode--aside { 
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
            }
            
            .cinchDeliverCode--aside img { 
                max-width: 24rem;
                border-radius: 1rem;
                margin: 1rem;
                box-shadow: 4px 8px 10px 2px rgb(21 101 192 / 20%);
            }
        `,
        isActive: false,
        routeNotes:
            '\t- Kanban - Originates from Japan as Visual Board. Used first by Toyota.\n' +
            '\t- Front-end\n' +
            '\t\t- Work on branches (feature branches with there own url for DEV)\n' +
            '\t\t- Github Actions to checkout for tests (unit, e2e, visual regression), code quality and build errors\n' +
            '\t\t- Deployed by github actions to master once branch has been merged\n' +
            '\t- Back-end\n' +
            '\t\t- Work on master directly (trunk based development)\n' +
            '\t\t- deplyed by github after github actions are run (unit, e2e, intergration, mutation)\n',
    },
    {
        id: 7,
        routeName: 'otherMethodologies',
        routeHTML: `
            <h1>Are there other methodologies?</h1>
            <h2>XP</h2>
            
            <section class="otherMethodologies--section">
                <h3>Five values of XP</h3>
                <ul>
                    <li>simplicity</li>
                    <li>feedback</li>
                    <li>Courage</li>
                    <li>respect</li>
                </ul>
    
                <h3>Practices</h3>
                <ul>
                    <li>Trunk based development</li>
                    <li>TDD</li>
                    <li>CI</li>
                    <li>Refactoring</li>
                </ul>
                
                <h3>Dev-focused Methodology</h3>
            </section>
        `,
        routeStyle: `
            .otherMethodologies--section {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                margin: 2rem 4rem;
            }
            
            .otherMethodologies--section h3 { 
                font-size: 1.5rem;
                line-height: 2rem;
                text-transform: capitalize;
            }
            
            .otherMethodologies--section li { 
                font-size: 1.25rem;
                line-height: 2rem;
                text-transform: capitalize;
            }
        `,
        isActive: false,
        routeNotes:
            "simplicity - what is the simplest thing that will work?\n feedback - Iterate iterate iterate, fail fast\n Courage - need to courage to speak him about problems that the team face, bottlenecks, what doesn't work, act on feedback, org issues\n respect - show repect to others" +
            'Trunk based development - \n TDD - Test Driven Development. Start with a small test, make the test pass with the simplest code etc \n CI - Continuous integration which is the automation of merging code into the main codebase \n Refactoring - constant improvements to increase the quality of the codebase',
    },
    {
        id: 8,
        routeName: 'goldenMethodology',
        routeHTML: `
            <h1>Is there a golden methodology?</h1>
            
            <section class="goldenMethodology--section">
                <ul>
                    <li>Right tool for the job</li>
                </ul>
            </section>
        `,
        routeStyle: `
            .goldenMethodology--section {
                display: flex;
                justify-content: center;
            }
        
            .goldenMethodology--section li { 
                font-size: 1.5rem;
                line-height: 2.5rem;
            }
        `,
        isActive: false,
        routeNotes:
            "It depends - well it depends. The best approach would be to pick a methodology that best suits the current situation that you are in. If you release quickly with the tools at your disposal and in addition do not have critical applications then XP could be the best. If you have a critical piece of software that is on a legacy system that needs to be updated so scrum would be a good fit (do I even dare say waterfall? hmm no I don't 😝 )",
    },
    {
        id: 9,
        routeName: 'futureOfDeliveringCode',
        routeHTML: `
            <h1>What does the future hold?</h1>
            <section class="futureOfDeliveringCode--section">
                <ul>
                    <li>fail fast via modern languages</li>
                    <li>Automation</li>
                    <li>DevOps</li>
                    <li>Teaching / learning</li>
                    <li>No Code</li>
                </ul>
            </section>

        `,
        routeStyle: `
            .futureOfDeliveringCode--section {
                display: flex;
                justify-content: center;
            }
        
            .futureOfDeliveringCode--section li { 
                font-size: 1.5rem;
                line-height: 2.5rem;
            }
        `,
        isActive: false,
        routeNotes:
            'fail fast via modern languages - The use of modern languages open the space for extremely fast compilation and releasing of features. Examples of this include GO for its self compling and also newer versions of javascript with dynamic importing.\n' +
            'Automation - continuation of using CI/CD to action important steps in your release.\n' +
            'DevOps - more learn towards infrastructure as code (eg terraform, kubernetes).\n' +
            "Teaching / learning - None of the above would be possible without engineers teaching other engineers approaches to delivering code. Being a greart engineer isn't about who can code the best.\n" +
            'No Code',
    },
    {
        id: 10,
        routeName: 'conclusion',
        routeHTML: `
            <h1>Questions?</h1>
            <section class="conclusion--section">
                <div class="conclusion--link-wrapper">
                    <h2>Link to presentation:</h2>
                    <img class="conclusion--img" src='${qrCode}' alt="QR Code"/>
                </div>
                <div class="conclusion--link-wrapper">
                    <h2>Link to website:</h2>
                    <a href="https://elliotevans.info">elliotevans.info</a>
                </div>
                <div class="conclusion--link-wrapper">
                    <h2>Link to framework:</h2>
                    <a href="https://github.com/Elliot-Evans-95/presentation-framwork">github.com/Elliot-Evans-95/presentation-framwork</a>
                </div>
            </section>

        `,
        routeStyle: `
            .conclusion--section {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin: 4rem;
            }
            
            .conclusion--img {
                max-width: 12rem;
                border: 0.5rem solid black;
                padding: 1rem;
                background: white;
            }          
            
            .conclusion--link-wrapper {
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin-bottom: 2rem;
                width: 75%;
            }
            
            .conclusion--link-wrapper h2 {
                text-align: left;
            }
        `,
        isActive: false,
        routeNotes:
            'Thank you for coming, if you want to go over this presentation in your own time I have a link to it here & a QR code. I also have a link to my blog here',
    },
]
