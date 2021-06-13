Задания для самостоятельной работы:

1. Реализовать **аутентификацию**:
    - используя со стороны BE (в API) - стандартный `has_secure_password`;
    - со стороны FE (в клиентском приложении) - любой UI фреймворк ([MaterialIU](https://material-ui.com/ru/), [AntDesign](https://ant.design/), ...etc) а также любой form builder с валидацией ([Formik](https://formik.org/docs/overview), [Yup](https://www.npmjs.com/package/yup));
2. Реализовать **авторизацию**, используя `action_policy gem`:
    - пользователь должен видеть все таски и комментарии;
    - пользователь должен иметь доступ для редактирования/удаления только к своим таскам и комментариям;
3. Добавить `background jobs` ([sidekiq](https://rubygems.org/gems/sidekiq/versions/5.0.5), [delayed_job](https://rubygems.org/gems/delayed_job), ...etc)
    - когда любой пользователь добавляет комментарий к таску, создатель таска должен получить email
4. Написать несколько **тестов** 
    - BE: покрыть тестами graphql запросы, используя RSpec
    - FE: unit тесты на компоненты (используя [jest](https://jestjs.io/docs/en/getting-started), [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/))