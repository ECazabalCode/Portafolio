import Card from '../../common/components/Card'
import codeBracket from '../../../assets/code-bracket.svg'
import server from '../../../assets/server.svg'
import tools from '../../../assets/tools.svg'
import Tag from '../../common/components/Tag'
import Container from '../../common/components/Container'
import Line from '../../common/components/Line'

function MySkills() {
    return (
        <>
            <div className="py-13 md:py-24 flex flex-col gap-4 items-center px-4" id='skills'>
                <h1 className="font-bold text-3xl text-center md:text-start">My Skills & Expertise</h1>
                <div className='xl:max-w-6/12 text-center'>
                    <p className='text-gray-500'>I've developed a diverse set of skills throughout my career. Here's a comprehensive overview of my technical expertise and the technologies I work with.</p>
                </div>
                <div className='grid sm:grid-cols-1 xl:grid-cols-3 gap-3 grow'>
                    <Card barColor='purple'>
                        <Card.Header>
                            <div className='p-2 bg-indigo-100 rounded-md'>
                                <img src={codeBracket} alt="code" style={{ width: '1.5rem' }} />
                            </div>
                            <h2 className='font-semibold text-xl'>Frontend Development</h2>
                        </Card.Header>
                        <Card.Body>
                            <Container>
                                <Tag text='Javascript' />
                                <Tag text='Typescript' />
                                <Tag text='React' />
                                <Tag text='Css' />
                                <Tag text='Redux' />
                                <Tag text='Tailwind CSS' />
                                <Tag text='Responsive Design' />
                                <Tag text='BEM CSS' />
                                <Tag text='Accessibility' />
                            </Container>
                        </Card.Body>
                    </Card>
                    <Card barColor='green'>
                        <Card.Header>
                            <div className='p-2 bg-green-100 rounded-md'>
                                <img src={server} alt="code" style={{ width: '1.5rem' }} />
                            </div>
                            <h2 className='font-semibold text-xl'>Backend Development</h2>
                        </Card.Header>
                        <Card.Body>
                            <Container>
                                <Tag text='NodeJS' />
                                <Tag text='Express.js' />
                                <Tag text='Python' />
                                <Tag text='Java' />
                                <Tag text='Spring Framework' />
                                <Tag text='NestJS' />
                                <Tag text='MySQL' />
                                <Tag text='PostgreSQL' />
                                <Tag text='MSSQL' />
                                <Tag text='Authentication' />
                                <Tag text='SOAP' />
                                <Tag text='Rest API' />
                            </Container>
                        </Card.Body>
                    </Card>
                    <Card barColor='orange'>
                        <Card.Header>
                            <div className='p-2 bg-orange-100 rounded-md'>
                                <img src={tools} alt="tools" style={{ width: '1.5rem' }} />
                            </div>
                            <h2 className='font-semibold text-xl'>Tools & Technologies</h2>
                        </Card.Header>
                        <Card.Body>
                            <Container>
                                <Tag text='Docker' />
                                <Tag text='CI/CD' />
                                <Tag text='Git' />
                                <Tag text='Linux' />
                                <Tag text='Pipelines' />
                                <Tag text='Bash' />
                                <Tag text='Github' />
                                <Tag text='Gitlab' />
                                <Tag text='AWS' />
                                <Tag text='Asana' />
                                <Tag text='UML' />
                                <Tag text='Postman' />
                                <Tag text='CCNA 1' />
                                <Tag text='Virtualizacion' />
                                <Tag text='SSH' />
                                <Tag text='Telnet' />
                            </Container>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <Line />
        </>
    )
}

export default MySkills