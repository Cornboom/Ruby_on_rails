class SessionsController < ApplicationController
  skip_before_action :authorize
  def new
  end

  def create
    user = User.find_by(email: params[:email].downcase)
    if user.try(:authenticate, params[:password])
      session[:user_id] = user.id
      redirect_to user
    else
      redirect_to signin_url, alert: 'Invalid email/password combination'
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to signin_url, notice: 'Logged out'
  end
end
