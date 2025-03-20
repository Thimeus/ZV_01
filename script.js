async function loadAllData() {
    try {
        // Formulierung laden
        const formulierungResponse = await fetch('./formulierung.json');
        if (!formulierungResponse.ok) throw new Error(`HTTP error! status: ${formulierungResponse.status}`);
        formulierungData = await formulierungResponse.json();
        console.log("Formulierung geladen:", formulierungData);
        
        // Textbaustein laden
        const textbausteinResponse = await fetch('./textbaustein.json');
        if (!textbausteinResponse.ok) throw new Error(`HTTP error! status: ${textbausteinResponse.status}`);
        textbausteinData = await textbausteinResponse.json();
        console.log("Textbaustein geladen:", textbausteinData);
        
        // Umsetzung laden
        const umsetzungResponse = await fetch('./umsetzung.json');
        if (!umsetzungResponse.ok) throw new Error(`HTTP error! status: ${umsetzungResponse.status}`);
        umsetzungData = await umsetzungResponse.json();
        console.log("Umsetzung geladen:", umsetzungData);
        
        // Vorlage laden
        const vorlageResponse = await fetch('./vorlage.json');
        if (!vorlageResponse.ok) throw new Error(`HTTP error! status: ${vorlageResponse.status}`);
        vorlageData = await vorlageResponse.json();
        console.log("Vorlage geladen:", vorlageData);
        
        return true;
    } catch (error) {
        console.error("Fehler beim Laden der Daten:", error);
        alert("Fehler beim Laden der Daten: " + error.message);
        return false;
    }
}