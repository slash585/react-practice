import React from "react"
import Button from "./button"
import Card from "./card"
import classes from "./errorModal.module.css"

function ErrorModal(props) {
  return (
    <>
      <div onClick={props.onConfirm} className={classes.backdrop}>
        <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={classes.content}>
            <p>{props.message}</p>
          </div>
          <footer className={classes.actions}>
            <Button onClick={props.onConfirm}>Okay</Button>
          </footer>
        </Card>
      </div>
    </>
  )
}

export default ErrorModal
