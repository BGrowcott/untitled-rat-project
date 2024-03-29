import React from "react";
import Auth from "../../utils/Auth";
import { useMutation } from "@apollo/client";
import { BUY_ITEM } from "../../utils/mutations";
import $ from "jquery";

function ShopCard({ id, itemName, image, description, price }) {
    const styles = {
        card: {
            backgroundColor: "whitesmoke",
            width: "250px",
            textAlign: "center",
            margin: "5px",
            padding: "5px",
            borderRadius: "10px",
            boxShadow: "0px 0px 5px black",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
        },
        image: {
            width: "100%",
        },
    };

    const [buyItem, { error }] = useMutation(BUY_ITEM);

    async function buyItemHandler(e) {
        const itemId = e.target.dataset.id;
        $(e.target).css("display", "none");
        setTimeout(() => $($(e.target).css("display", "block")), 1000);
        const userId = Auth.getProfile().data._id;
        try {
            const { data } = await buyItem({
                variables: { userId: userId, itemId: itemId },
            });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div style={styles.card}>
            <div>
                <h3>{itemName}</h3>
            </div>
            <div>
                <img style={styles.image} src={image} />
            </div>
            <div>
                <p>{description}</p>
            </div>
            <div>
                <p>Cost: {price}</p>
                <button data-id={id} onClick={buyItemHandler}>
                    Buy
                </button>
            </div>
        </div>
    );
}

export default ShopCard;
