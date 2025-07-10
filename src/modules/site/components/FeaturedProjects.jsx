import getTextByLanguage from '../../../utils/get-text-by-language'
import Container from '../../common/components/Container'
import placeholder from '/src/assets/placeholder.svg'
import AppContext from '../../../context/AppContext'
import Card from '../../common/components/Card'
import Tag from '../../common/components/Tag'
import { useContext } from 'react'

function FeaturedProject() {
    const appContext = useContext(AppContext)

    return (
        <div className='px-4 pt-24 flex flex-col gap-10'>
            <h2 className='font-bold text-3xl text-center md:text-start'>Featured Projects</h2>
            <div className='sm:grid-cols-1 xl:grid-cols-3 grid gap-6'>
                <Card style={{ display: 'grid', gridTemplateRows: '40% 1fr 1fr', height: '25rem' }}>
                    <Card.Header style={{ padding: 0 }}>
                        <img src={placeholder} alt="xpd law" />
                    </Card.Header>
                    <Card.Body style={{ backgroundColor: 'white' }}>
                        <div className='py-4'>
                            <h2 className='text-xl font-semibold'>XPD Law</h2>
                            <p className='text-gray-500 text-sm'>{getTextByLanguage(appContext.language, 'xpd-law-description')}</p>
                        </div>
                    </Card.Body>
                    <Card.Footer>
                        <Container>
                            <Tag text='Javascript' />
                            <Tag text='Electron js' />
                            <Tag text='Cheerio' />
                            <Tag text='Puppeter' />
                        </Container>
                    </Card.Footer>
                </Card>
                <Card style={{ display: 'grid', gridTemplateRows: '40% 1fr 1fr', height: '25rem' }}>
                    <Card.Header style={{ padding: 0 }}>
                        <img src={placeholder} alt="Mailswift" />
                    </Card.Header>
                    <Card.Body style={{ backgroundColor: 'white' }}>
                        <div className='py-4'>
                            <h2 className='text-xl font-semibold'>Mailswift</h2>
                            <p className='text-gray-500 text-sm'>{getTextByLanguage(appContext.language, 'mailswift-description')}</p>
                        </div>
                    </Card.Body>
                    <Card.Footer>
                        <Container>
                            <Tag text='Javascript' />
                            <Tag text='Express Js' />
                            <Tag text='Prisma' />
                            <Tag text='Ejs' />
                            <Tag text='Nodemailer' />
                            <Tag text='MySQL' />
                        </Container>
                    </Card.Footer>
                </Card>
                <Card style={{ display: 'grid', gridTemplateRows: '40% 1fr 1fr', height: '25rem' }}>
                    <Card.Header style={{ padding: 0 }}>
                        <img src={placeholder} alt="Mailswift" />
                    </Card.Header>
                    <Card.Body style={{ backgroundColor: 'white' }}>
                        <div className='py-4'>
                            <h2 className='text-xl font-semibold'>ERP</h2>
                            <p className='text-gray-500 text-sm'>{getTextByLanguage(appContext.language, 'erp-description')}</p>
                        </div>
                    </Card.Body>
                    <Card.Footer>
                        <Container>
                            <Tag text='Java' />
                            <Tag text='Swing' />
                            <Tag text='Lombok' />
                            <Tag text='MySql' />
                            <Tag text='JPA' />
                        </Container>
                    </Card.Footer>
                </Card>
            </div>
        </div >
    )
}

export default FeaturedProject