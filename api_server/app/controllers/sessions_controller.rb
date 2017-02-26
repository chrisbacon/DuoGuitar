class SessionsController < Devise::SessionsController

  respond_to :json

  def create
    render :json => current_user.courses.to_json 
  end

end
