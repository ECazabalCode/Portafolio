import Container from '../../common/components/Container'
import Button from '../../common/components/Button'
import Card from '../../common/components/Card'
import Tag from '../../common/components/Tag'

function FeaturedProject() {
    return (
        <div className='px-4 pt-24'>
            <h2 className='font-bold text-3xl text-center md:text-start'>Featured Projects</h2>
            <Card>
                <Card.Header>
                </Card.Header>
                <Card.Body>
                    <div className='py-4'>
                        <h2 className='text-xl font-semibold'>XPD Law</h2>
                    </div>
                    <Container>
                        <Tag text='Javascript' />
                        <Tag text='Electron js' />
                        <Tag text='Cheerio' />
                        <Tag text='Puppeter' />
                    </Container>
                </Card.Body>
            </Card>
        </div>
    )
}

export default FeaturedProject