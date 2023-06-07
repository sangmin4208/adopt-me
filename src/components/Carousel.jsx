import { Component } from 'react'

class Carousel extends Component {
  state = {
    active: 0,
  }
  static defaultProps = {
    images: ['http://pets-images.dev-apis.com/pets/none.jpg'],
  }
  handleIndexClick = (event) => {
    // eslint-disable-next-line
    this.setState({
      active: +event.target.dataset.index,
    })
  }

  componentDidMount() {
    // 처음 랜더링 되었을 때 실행
    console.log('componentDidMount')
  }

  componentDidUpdate(prevProps, prevState) {
    // 리렌더링 되었을 때 실행
    console.log('componentDidUpdate')
    console.log({ prevProps, prevState })
  }

  componentDidCatch(error, info) {
    // 자식 컴포넌트에서 에러 발생했을 때 실행
    console.error('🐛 ErrorBoundary caught an error', error, info)
    return <h1>There was an error with this listing. Try again later.</h1>
  }

  componentWillUnmount() {
    // 컴포넌트가 사라질 때 실행
    console.log('componentWillUnmount')
  }
  render() {
    const { active } = this.state
    const { images } = this.props
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              className={index === active ? 'active' : ''}
              alt="animal thumbnail"
              onClick={this.handleIndexClick}
              data-index={index}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Carousel
