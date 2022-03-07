import React from "react"
import Button from "./button"
import Card from "./card"
import classes from "./errorModal.module.css"

function ErrorModal(props) {
  return (
    <>
      <div className={classes.backdrop}>
        <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={classes.content}>
            <p>{props.message}</p>
          </div>
          <footer className={classes.actions}>
            <Button>Okay</Button>
          </footer>
        </Card>
      </div>
    </>
  )
}

export default ErrorModal
