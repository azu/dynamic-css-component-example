# Dynamic CSS Component example

https://dynamic-css-component-example.netlify.app/

## Pass value from JS to CSS

Pass value using `style` attribute and CSS Custom Properties

```jsx
<Main className={"App-Main"}
      style={{
          "--border": mode === "dark" ? "4px solid green" : "none"
      }}
></Main>
```

- [Dynamic CSS Components Without JavaScript: Every Layout](https://every-layout.dev/blog/css-components/)
- [Reactive Online Meetup | Scott Tolinski&Jen Luker #3 - YouTube](https://www.youtube.com/watch?v=5o6bP9sX248&t=)
- [なぜ私たちはCSSフレームワークを使わないのか - Scott Tolinksi氏、Reactive Conf](https://www.infoq.com/jp/news/2020/07/css-variables-design-systems/?)
