import React from "react"
import ContactCard from './ContactCard';

function App() {
    return (
        <div>
            <ContactCard contact={{image: "http://placekitten.com/300/200", name: "Mr. Whiskerson", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow" }}/>

            <ContactCard contact={{image: "http://placekitten.com/400/200", name: "Fluffykins", phone: "(212) 555-2345", email: "fluff@me.com" }}/>

            <ContactCard contact={{image: "http://placekitten.com/400/300", name: "Destroyer", phone: "(212) 555-3456", email: "ofworlds@yahoo.com" }}/>

            <ContactCard contact={{image: "http://placekitten.com/200/100", name: "Felix", phone: "(212) 555-4567", email: "thecat@hotmail.com" }}/>
        </div>
    )
}

export default App