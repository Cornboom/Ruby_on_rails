class ApplicationController < ActionController::Base
  before_action :authorize
  before_action :current_user

  protected

  def authorize
    redirect_to signin_url unless User.find_by(id: session[:user_id])
  end

  def current_user
    return unless session[:user_id]

    @current_user ||= User.find(session[:user_id])
  end
end
