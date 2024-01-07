//import fs from 'fs';

async function description(casino: string, url: string, slot: string, org: string) {
    //const res = await fetch(`organisations/${organisation}.txt`);
    //const org = await res.text();

    const text = 
`DON'T TRY THIS AT HOME! Vi förlorar nästan alltid när vi spelar, det gör alla.
        
VIKTIGT: Om du ska spela, gör det på casinot med högst RTP!
            
Samma spel kan nämligen ha olika vinstmarginal hos olika casinon. Vi har därför jämfört nästan alla spel och casinon och sammanställt en lista, där du enkelt kan se vart du har störst vinstchans och vilka casinon du absolut inte bör spela på.
            
Den listan hittar du genom att googla exempelvis: Great.com ${slot}
        
Googla alltså: Great.com + spelnamnet
        
Titta gärna på denna spellista med ALLA våra videos: https://www.youtube.com/playlist?list=PLr1m5Nf61lvfbPiu_hksP82Z-urQT_ClT
        
Vill du läsa mer om ${casino} så kan du göra det här: ${url}
        
Vi skänker som vanligt bort alla pengar och idag går de till ${org}
        
Bevis för donationer kan du hitta här: https://great.com/sv-se/valgorenhet/
        
Bevis på att det är riktiga pengar vi spelar med hittar du här: https://drive.google.com/drive/folders/1noO5QzzujHAOiAgc_d-YdLMm4PJ_-JZK
        
Vi spelar inte ${slot} för att vinna pengar. Vi spelar för att vi vill få ${casino}s uppmärksamhet. Vår ambition är att få casinona mer intresserade av välgörenhet och att ge bort delar av sin vinst till bra grejer. Vi har regelbundet möten med casinona för att få dem att dubbla allt vi donerar i våra videor. De har visat intresse men vill se att kanalen blir större innan de engagerar sig mer. Varje gång du tittar på en av våra videor, likar, prenumererar eller delar den så ökar du våra chanser i förhandlingarna med spelbolagen. Ju fler som tittar, ju mer intresserade blir dem!
            
Vi har råd att förlora. Vi spelar ${slot} med Erik Bergmans pengar. Han tjänade över en halv miljard innan han var 30 år genom att grunda casinomarknadsföringsbolaget Catena Media. Sedan dess har han gett bort omkring 40 miljoner kronor till olika välgörenhetsorganisationer. Han har också startat Great.com, även det ett casinomarknadsföringsbolag men med den stora skillnaden att de ger bort all vinst till välgörenhet. Målet är att förändra hela spelindustrin och att inspirera fler ägare av stora bolag att dedikera mer av sin förmögenhet till att förbättra världen.
        
I den här videon spelar vi ${slot} Big Win hos ${casino}. ${slot} Big Win är ett av de mest populära casinospelen i Sverige. Hoppet är att pricka in en riktig ${slot} Big Win och kunna skänka massor av pengar!
        
Vill du läsa mer om ${slot} så googla: Great.com ${slot}

Vill du veta mer om varför vi driver en Youtube-kanal eller hur vi gör våra videor kan du göra det här: https://great.com/sv-se/var-youtube-kanal/`

    return (
        text
    )
}

export default description