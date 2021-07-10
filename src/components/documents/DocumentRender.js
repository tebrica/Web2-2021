export default function RenderDocuments(docType, document) {
    switch(docType) {
        case 'Work requests' : return renderWorkRequests(document);
        case 'Work plans' : return renderWorkPlans(document);
        case 'Safety documents' : return renderSafetyDocuments(document);
        default: return <div></div>
    }
}

function renderWorkRequests(document) {
    return <tr>
        <td> {document.IdNaloga} </td>
        <td> {document.Type === 0 ? 'Planirani' : 'Neplanirani'} </td>
        <td> {document.CreatedTime} </td>
        <td> {document.PocetakRada} </td>
        <td> {document.KrajRada} </td>
    </tr>
}

function renderWorkPlans(document) {
    return <tr>
        <td> {document.IdPlana} </td>
        <td> {document.Type === 0 ? 'Planirani' : 'Neplanirani'} </td>
        <td> {document.CreatedOn} </td>
        <td> {document.PocetakRada} </td>
        <td> {document.KrajRada} </td>
    </tr>
}

function renderSafetyDocuments(document) {
    return <tr>
        <td> {document.Id} </td>
        <td> {document.DocumentType === 0 ? 'Planirani' : 'Neplanirani'} </td>
        <td> {document.CreatedOn} </td>
        <td> {document.TelefonskiBroj} </td>
        <td> {document.CreatedOn} </td>
    </tr>
}