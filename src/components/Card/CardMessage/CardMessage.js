import React from 'react'
import PropTypes from 'prop-types'
import s from '../Card.module.scss'
import classNames from 'classnames'

function CardMessage(props) {
  const { isAvailable, isSelected, flavorName, flavorDescription, markSelected } = props

  let message

  if (isAvailable && isSelected) {
    message = <p className={s.message}>{flavorDescription}</p>
  } else if (isAvailable && !isSelected) {
    message = (
      <p className={s.message}>
        Чего сидишь? Порадуй котэ,{' '}
        <button
          type='button'
          className={s.message__purchase_button}
          onClick={() => markSelected(isSelected)}
        >
          купи.
        </button>
      </p>
    )
  } else {
    message = (
      <p className={classNames(s.message, s.message_disabled)}>
        Печалька, {flavorName} закончился.
      </p>
    )
  }

  return <div>{message}</div>
}

CardMessage.propTypes = {
  isAvailable: PropTypes.bool,
  isSelected: PropTypes.bool,
  flavorName: PropTypes.string,
  flavorDescription: PropTypes.string,
  markSelected: PropTypes.func,
}

export default CardMessage
