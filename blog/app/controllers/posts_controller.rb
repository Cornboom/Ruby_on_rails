# наследуется от самого главного контроллера Application controller
class PostsController < ApplicationController
  # http_basic_authenticate_with name: "admin", password: "123", except: [:index, :show]
  # система пользователей (администраторов), отключил по причине неясности нужны

  def index
    @post = Post.all # вывод всех постов из бд на главной странице
  end

  def new
    @post = Post.new
  end

  def show
    @post = Post.find(params[:id])
  end

  def edit
    @post = Post.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])

    if @post.update(params.require(:post).permit(:title, :body))
      redirect_to @post
    else
      render 'edit'
    end
  end

  def destroy
    @post = Post.find(params[:id])

    @post.destroy
    redirect_to posts_path
  end

  def create
    # render plain: params[:post].inspect  отладчик для проверки работоспособности
    @post = Post.new(params.require(:post).permit(:title, :body))

    if @post.save # сохраним созданный пост
      redirect_to @post # вызов метода show
    else
      render 'new'
    end
  end

  # private def post_params метод для указания нужных нам полей при создании поста
  # params.require(:post).permit(:title, :body)
  # end
end
