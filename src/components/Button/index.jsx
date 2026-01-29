import { PrimaryButton, SecondaryButton } from "./styles.js";

export default function Button({ children, red, ...rest }) {

    return (
        <> 
    {red ? ( 
    <PrimaryButton {...rest}>{children}</PrimaryButton>
 ) : ( 
   <SecondaryButton {...rest}>{children}</SecondaryButton>
    )}
   </>
)
}

