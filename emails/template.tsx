import React, { CSSProperties } from 'react'
import { Html, Body, Container, Text, Link, Preview, Tailwind } from "@react-email/components"

const WelcomeTemplate = ({name}: {name: string}) => {

    return (
        <Html>
            <Preview>WelcomeTemplate</Preview>
            <Tailwind>
                <Body className="" style={body}>
                    <Container>
                        <Text className="font-bold" style={heading}>Hello {name}</Text>
                        <Link href="https://www.google.com">Google</Link>
                    </Container>
                </Body>
            </Tailwind>
        </Html>  
    )
}

const body: CSSProperties = {
    background: '#fff'
}

const heading: CSSProperties = {
    fontSize: "20px",
}


export default WelcomeTemplate