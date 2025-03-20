import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const PdfView = ({ pdfSrc }) => {
    return (
        <div className="w-full overflow-hidden rounded-lg shadow-lg" style={{ height: "700px" }}>
            <Worker workerUrl={`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`}>
                <div style={{ height: "100%", overflowY: "auto" }}>
                    <Viewer fileUrl={pdfSrc} />
                </div>
            </Worker>
        </div>


    );
};

export default PdfView;
