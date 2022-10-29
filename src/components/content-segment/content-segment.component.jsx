import { Component } from 'react'
import { Segment, Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


class ContentSegment extends Component {

    render() {
        return (

            <Segment className='curatedByNclyneSegment'>
                <Header as='h2' className='curationProjectCopy'>
                    Curated by Nclyne
                </Header>
                <Header sub className='curationProjectCopy'>
                    An art curation project introducing select creators to blockchain markets.
                </Header>
                <Header sub className='curationProjectCopy'>
                    Each series is comissioned from a rising artist who receives 100% of the primary sales commision.
                </Header>
                <Header sub className='curationProjectCopy'>
                    Nclyne Artists & Collectors receive exclusive benefits within the platform.
                </Header>
            </Segment>
        )
    }
}

export default ContentSegment;


