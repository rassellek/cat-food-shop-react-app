import React, { useState } from 'react'
import PropTypes from 'prop-types'
import s from './Card.module.scss'
import CardMessage from './CardMessage/CardMessage'
import classNames from 'classnames'

function Card(props) {
  const [isSelected, setIsSelected] = useState(false)
  const [isSelectionChanged, setIsSelectionChanged] = useState(false)
  const { name, tagline, flavorName, flavorDescription, isAvailable, weight, image } = props

  function getServingsAmount(weight) {
    return weight / 0.05
  }

  function getGiftMessage(weight) {
    let gift

    if (weight === 0.5) {
      gift = <p>мышь в подарок</p>
    } else if (weight === 2) {
      gift = (
        <p>
          <span className={s.card__gift_info}>2</span> мыши в подарок
        </p>
      )
    } else {
      gift = (
        <p>
          <span className={s.card__gift_info}>5</span> мышей в подарок
        </p>
      )
    }

    return gift
  }

  const servings = getServingsAmount(weight)

  const gift = getGiftMessage(weight)

  function markSelected(selected) {
    if (isAvailable) {
      setIsSelected(!selected)
      setIsSelectionChanged(true)
    }
  }

  return (
    <div
      className={classNames(s.card, {
        [s.default_initial]: isAvailable && !isSelected && isSelectionChanged,
        [s.card_default]: isAvailable && !isSelected && !isSelectionChanged,
        [s.card_selected_initial]: isSelected && isSelectionChanged,
        [s.card_selected]: isSelected && !isSelectionChanged,
        [s.card_disabled]: !isAvailable,
      })}
      onMouseOut={() => setIsSelectionChanged(false)}
      onBlur={() => setIsSelectionChanged(false)}
    >
      <div className={s.card__border} onClick={isAvailable ? () => markSelected(isSelected) : null}>
        <div className={s.card__backdrop}>
          <div className={s.card__text}>
            <p className={s.card__tagline}>{tagline}</p>
            <p className={s.card__tagline_nothover}></p>
            <h2 className={s.card__title}>{name}</h2>
            <h3 className={s.card__flavor}>{flavorName}</h3>
            <div className={s.card__purchase_info}>
              <p>
                <span className={s.card__servings_info}>{servings}</span> порций
              </p>
              {gift}
              {servings >= 100 ? <p>заказчик доволен</p> : null}
            </div>
          </div>

          <div className={classNames(s.containerImage, { [s.servingsImage]: servings >= 100 })}>
            <img className={s.image} src={image} />
          </div>

          <div className={s.card__weight_label}>
            <p className={s.card__amount}>{`${weight}`.replace('.', ',')}</p>
            <p className={s.card__unit}>кг</p>
          </div>
        </div>
      </div>
      <CardMessage
        isAvailable={isAvailable}
        isSelected={isSelected}
        flavorName={flavorName}
        flavorDescription={flavorDescription}
        markSelected={markSelected}
      />
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string,
  tagline: PropTypes.string,
  flavorName: PropTypes.string,
  flavorDescription: PropTypes.string,
  weight: PropTypes.number,
  isAvailable: PropTypes.bool,
}

Card.defaultProps = {
  name: 'Нямушка',
  tagline: 'Сказочное заморское яство',
  flavorName: 'с фуа-гра',
  flavorDescription: 'Печень утки разварная с артишоками.',
  weight: 0.5,
  isAvailable: true,
}

export default Card
