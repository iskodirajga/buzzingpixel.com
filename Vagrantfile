require 'json'
require 'yaml'

VAGRANTFILE_API_VERSION ||= "2"
confDir = $confDir ||= File.expand_path("vendor/laravel/homestead", File.dirname(__FILE__))

homesteadYamlPath = "Homestead.yaml"
homesteadJsonPath = "Homestead.json"
afterScriptPath = "after.sh"
aliasesPath = "aliases"

require File.expand_path(confDir + '/scripts/homestead.rb')

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
    if File.exists? aliasesPath then
        config.vm.provision "file", source: aliasesPath, destination: "~/.bash_aliases"
    end

    if File.exists? homesteadYamlPath then
        Homestead.configure(config, YAML::load(File.read(homesteadYamlPath)))
    elsif File.exists? homesteadJsonPath then
        Homestead.configure(config, JSON.parse(File.read(homesteadJsonPath)))
    end

    if File.exists? afterScriptPath then
        config.vm.provision "shell", path: afterScriptPath
    end

    config.vm.box_version = "0.4.0"

    # Make sure nginx restarts after shared folders are mounted.
    config.vm.provision "shell", inline: "sudo service nginx restart",
      run: "always"

    config.vm.provider :virtualbox do |v|
        # Set the timesync threshold to 5 seconds, instead of the default 20 minutes, and set timesync to run automatically upon wake.
        v.customize ["guestproperty", "set", :id, "/VirtualBox/GuestAdd/VBoxService/--timesync-set-threshold", "5000"]
        v.customize ["guestproperty", "set", :id, "/VirtualBox/GuestAdd/VBoxService/--timesync-set-start"]
        v.customize ["guestproperty", "set", :id, "/VirtualBox/GuestAdd/VBoxService/--timesync-set-on-restore", "1"]
    end
end
