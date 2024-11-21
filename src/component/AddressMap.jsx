
const AddressMap = () => {
    return (
        <div className="google-map-code">
           <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3896.6160296152863!2d-77.781167!3d21.521757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ffbe7f0e9e393df%3A0x8aa4dff1f325e594!2sCuba!5e0!3m2!1ses!2sus!4v1609444513125!5m2!1ses!2sus"
        width={"1300px"}
        height={"450px"}
        style={{ border: 'solid 6px black', borderRadius: '15px'}}
        loading="lazy" 
        title="Cuba"
        referrerPolicy="no-referrer-when-downgrade"
      />
        </div>
    );
};
export { AddressMap };