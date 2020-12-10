const Discord = require ("discord.js");
const talkedRecently = new Set();
const config = require('../config.json');

module.exports = {
	name: 'soundboard',
    description: 'Checks the bot\'s ping',
    aliases: ['soundfx', 'soundeffects', 'sb', 'sfx',],
	usage: '!ping',
	args: false,
	async execute(bot, message, args, prefix) {
        if (message.author.id != config.ownerID) {
        if (talkedRecently.has(message.author.id)) {
            return message.reply("Please wait 10 seconds before using this command again!")
            .then(message => {
                message.delete({timeout:3000})
            });
        }
        }

        let input;
    if(args[0]) input = args[0].toLowerCase();
    else input = args[0];
    if (input == "forcestop") {

        if (!message.member.hasPermission("MANAGE_SERVER")) {
            return;
        }

        if (message.member.voice.channel) {
            message.member.voice.channel.leave();
            
          } else {
            message.delete().catch(error =>{
            })
            message.reply('Join a channel and try again')
            .then(message => {
            message.delete({timeout:3000});
            }); 
          }}
        else if (input == "yeet") {

            if (message.guild.me.voice.channel) {
                return message.channel.send("Another user is already using me! Please try again soon.")
            }

            if (message.member.voice.channel) {
                message.delete().catch(error =>{
                })
                talkedRecently.add(message.author.id);
        setTimeout(() => {
            talkedRecently.delete(message.author.id);
        }, 10000);
                const connection = await message.member.voice.channel.join();
            const dispatcher = connection.play('./soundfx/yeetsfx.mp3')
                message.channel.send("🔊 Playing the **'Yeet'** sound effect in your voice channel").catch(error =>{
                })
                dispatcher.on('finish', () => {
                    message.member.voice.channel.leave();
                  });
                
              } else {
                message.delete().catch(error =>{
                })
                message.reply('Join a channel and try again')
                .then(message => {
                message.delete({timeout:3000});
                }); 
              }}
    
            else if (input == "nope") {

                if (message.guild.me.voice.channel) {
                    return message.channel.send("Another user is already using me! Please try again soon.")
                }

                if (message.member.voice.channel) {
                    message.delete().catch(error =>{
                    })
                    talkedRecently.add(message.author.id);
            setTimeout(() => {
                talkedRecently.delete(message.author.id);
            }, 10000);
                    const connection = await message.member.voice.channel.join();
                const dispatcher = connection.play('./soundfx/nopesfx.mp3')
                    message.channel.send("🔊 Playing the **'Nope'** sound effect in your voice channel").catch(error =>{
                    })
                    dispatcher.on('finish', () => {
                        message.member.voice.channel.leave();
                      });
                    
                  } else {
                    message.delete().catch(error =>{
                    })
                    message.reply('Join a channel and try again')
                    .then(message => {
                    message.delete({timeout:3000});
                    }); 
                  }}
                  
                  else if (input == "law&order") {

                    if (message.guild.me.voice.channel) {
                        return message.channel.send("Another user is already using me! Please try again soon.")
                    }

                    if (message.member.voice.channel) {
                        message.delete().catch(error =>{
                        })
                        talkedRecently.add(message.author.id);
                setTimeout(() => {
                    talkedRecently.delete(message.author.id);
                }, 10000);
                        const connection = await message.member.voice.channel.join();
                    const dispatcher = connection.play('./soundfx/law&ordersfx.mp3')
                        message.channel.send("🔊 Playing the **'Law & Order'** sound effect in your voice channel").catch(error =>{
                        })
                        dispatcher.on('finish', () => {
                            message.member.voice.channel.leave();
                          });
                        
                      } else {
                        message.delete().catch(error =>{
                        })
                        message.reply('Join a channel and try again')
                        .then(message => {
                        message.delete({timeout:3000});
                        }); 
                      }}

                      else if (input == "noice") {

                        if (message.guild.me.voice.channel) {
                            return message.channel.send("Another user is already using me! Please try again soon.")
                        }
    
                        if (message.member.voice.channel) {
                            message.delete().catch(error =>{
                            })
                            talkedRecently.add(message.author.id);
                    setTimeout(() => {
                        talkedRecently.delete(message.author.id);
                    }, 10000);
                            const connection = await message.member.voice.channel.join();
                        const dispatcher = connection.play('./soundfx/noicesfx.mp3')
                            message.channel.send("🔊 Playing the **'Noice'** sound effect in your voice channel").catch(error =>{
                            })
                            dispatcher.on('finish', () => {
                                message.member.voice.channel.leave();
                              });
                            
                          } else {
                            message.delete().catch(error =>{
                            })
                            message.reply('Join a channel and try again')
                            .then(message => {
                            message.delete({timeout:3000});
                            }); 
                          }}

                          else if (input == "nootnoot") {

                            if (message.guild.me.voice.channel) {
                                return message.channel.send("Another user is already using me! Please try again soon.")
                            }
        
                            if (message.member.voice.channel) {
                                message.delete().catch(error =>{
                                })
                                talkedRecently.add(message.author.id);
                        setTimeout(() => {
                            talkedRecently.delete(message.author.id);
                        }, 10000);
                                const connection = await message.member.voice.channel.join();
                            const dispatcher = connection.play('./soundfx/nootnootsfx.mp3')
                                message.channel.send("🔊 Playing the **'Noot Noot'** sound effect in your voice channel").catch(error =>{
                                })
                                dispatcher.on('finish', () => {
                                    message.member.voice.channel.leave();
                                  });
                                
                              } else {
                                message.delete().catch(error =>{
                                })
                                message.reply('Join a channel and try again')
                                .then(message => {
                                message.delete({timeout:3000});
                                }); 
                              }}

                              else if (input == "fbiopenup") {

                                if (message.guild.me.voice.channel) {
                                    return message.channel.send("Another user is already using me! Please try again soon.")
                                }
            
                                if (message.member.voice.channel) {
                                    message.delete().catch(error =>{
                                    })
                                    talkedRecently.add(message.author.id);
                            setTimeout(() => {
                                talkedRecently.delete(message.author.id);
                            }, 10000);
                                    const connection = await message.member.voice.channel.join();
                                const dispatcher = connection.play('./soundfx/fbiopenupsfx.mp3')
                                    message.channel.send("🔊 Playing the **'FBI Open up'** sound effect in your voice channel").catch(error =>{
                                    })
                                    dispatcher.on('finish', () => {
                                        message.member.voice.channel.leave();
                                      });
                                    
                                  } else {
                                    message.delete().catch(error =>{
                                    })
                                    message.reply('Join a channel and try again')
                                    .then(message => {
                                    message.delete({timeout:3000});
                                    }); 
                                  }}

                                  else if (input == "wow") {

                                    if (message.guild.me.voice.channel) {
                                        return message.channel.send("Another user is already using me! Please try again soon.")
                                    }
                
                                    if (message.member.voice.channel) {
                                        message.delete().catch(error =>{
                                        })
                                        talkedRecently.add(message.author.id);
                                setTimeout(() => {
                                    talkedRecently.delete(message.author.id);
                                }, 10000);
                                        const connection = await message.member.voice.channel.join();
                                    const dispatcher = connection.play('./soundfx/wowsfx.mp3')
                                        message.channel.send("🔊 Playing the **'WOW'** sound effect in your voice channel").catch(error =>{
                                        })
                                        dispatcher.on('finish', () => {
                                            message.member.voice.channel.leave();
                                          });
                                        
                                      } else {
                                        message.delete().catch(error =>{
                                        })
                                        message.reply('Join a channel and try again')
                                        .then(message => {
                                        message.delete({timeout:3000});
                                        }); 
                                      }}

                                      else if (input == "error") {

                                        if (message.guild.me.voice.channel) {
                                            return message.channel.send("Another user is already using me! Please try again soon.")
                                        }
                    
                                        if (message.member.voice.channel) {
                                            message.delete().catch(error =>{
                                            })
                                            talkedRecently.add(message.author.id);
                                    setTimeout(() => {
                                        talkedRecently.delete(message.author.id);
                                    }, 10000);
                                            const connection = await message.member.voice.channel.join();
                                        const dispatcher = connection.play('./soundfx/errorsfx.wav')
                                            message.channel.send("🔊 Playing the **'Windows XP Error'** sound effect in your voice channel").catch(error =>{
                                            })
                                            dispatcher.on('finish', () => {
                                                message.member.voice.channel.leave();
                                              });
                                            
                                          } else {
                                            message.delete().catch(error =>{
                                            })
                                            message.reply('Join a channel and try again')
                                            .then(message => {
                                            message.delete({timeout:3000});
                                            }); 
                                          }}

                                          else if (input == "oof") {

                                            if (message.guild.me.voice.channel) {
                                                return message.channel.send("Another user is already using me! Please try again soon.")
                                            }
                        
                                            if (message.member.voice.channel) {
                                                message.delete().catch(error =>{
                                                })
                                                talkedRecently.add(message.author.id);
                                        setTimeout(() => {
                                            talkedRecently.delete(message.author.id);
                                        }, 10000);
                                                const connection = await message.member.voice.channel.join();
                                            const dispatcher = connection.play('./soundfx/oofsfx.mp3')
                                                message.channel.send("🔊 Playing the **'Roblox OOF'** sound effect in your voice channel").catch(error =>{
                                                })
                                                dispatcher.on('finish', () => {
                                                    message.member.voice.channel.leave();
                                                  });
                                                
                                              } else {
                                                message.delete().catch(error =>{
                                                })
                                                message.reply('Join a channel and try again')
                                                .then(message => {
                                                message.delete({timeout:3000});
                                                }); 
                                              }}
                                              else if (input == "cena") {

                                                if (message.guild.me.voice.channel) {
                                                    return message.channel.send("Another user is already using me! Please try again soon.")
                                                }
                            
                                                if (message.member.voice.channel) {
                                                    message.delete().catch(error =>{
                                                    })
                                                    talkedRecently.add(message.author.id);
                                            setTimeout(() => {
                                                talkedRecently.delete(message.author.id);
                                            }, 10000);
                                                    const connection = await message.member.voice.channel.join();
                                                const dispatcher = connection.play('./soundfx/cenasfx.mp3')
                                                    message.channel.send("🔊 Playing the **'John Cena'** sound effect in your voice channel").catch(error =>{
                                                    })
                                                    dispatcher.on('finish', () => {
                                                        message.member.voice.channel.leave();
                                                      });
                                                    
                                                  } else {
                                                    message.delete().catch(error =>{
                                                    })
                                                    message.reply('Join a channel and try again')
                                                    .then(message => {
                                                    message.delete({timeout:3000});
                                                    }); 
                                                  }}


                                                  else if (input == "fakeping") {

                                                    if (message.guild.me.voice.channel) {
                                                        return message.channel.send("Another user is already using me! Please try again soon.")
                                                    }
                                
                                                    if (message.member.voice.channel) {
                                                        message.delete().catch(error =>{
                                                        })
                                                        talkedRecently.add(message.author.id);
                                                setTimeout(() => {
                                                    talkedRecently.delete(message.author.id);
                                                }, 10000);
                                                        const connection = await message.member.voice.channel.join();
                                                    const dispatcher = connection.play('./soundfx/fakepingsfx.mp3')
                                                        message.channel.send("🔊 Playing the **'Dicord Ping'** sound effect in your voice channel").catch(error =>{
                                                        })
                                                        dispatcher.on('finish', () => {
                                                            message.member.voice.channel.leave();
                                                          });
                                                        
                                                      } else {
                                                        message.delete().catch(error =>{
                                                        })
                                                        message.reply('Join a channel and try again')
                                                        .then(message => {
                                                        message.delete({timeout:3000});
                                                        }); 
                                                      }}
                                                      else if (input == "fakejoin") {

                                                        if (message.guild.me.voice.channel) {
                                                            return message.channel.send("Another user is already using me! Please try again soon.")
                                                        }
                                    
                                                        if (message.member.voice.channel) {
                                                            message.delete().catch(error =>{
                                                            })
                                                            talkedRecently.add(message.author.id);
                                                    setTimeout(() => {
                                                        talkedRecently.delete(message.author.id);
                                                    }, 10000);
                                                            const connection = await message.member.voice.channel.join();
                                                        const dispatcher = connection.play('./soundfx/fakejoinsfx.mp3')
                                                            message.channel.send("🔊 Playing the **'Discord Join'** sound effect in your voice channel").catch(error =>{
                                                            })
                                                            dispatcher.on('finish', () => {
                                                                message.member.voice.channel.leave();
                                                              });
                                                            
                                                          } else {
                                                            message.delete().catch(error =>{
                                                            })
                                                            message.reply('Join a channel and try again')
                                                            .then(message => {
                                                            message.delete({timeout:3000});
                                                            }); 
                                                          }}
                                                          else if (input == "fakeleave") {

                                                            if (message.guild.me.voice.channel) {
                                                                return message.channel.send("Another user is already using me! Please try again soon.")
                                                            }
                                        
                                                            if (message.member.voice.channel) {
                                                                message.delete().catch(error =>{
                                                                })
                                                                talkedRecently.add(message.author.id);
                                                        setTimeout(() => {
                                                            talkedRecently.delete(message.author.id);
                                                        }, 10000);
                                                                const connection = await message.member.voice.channel.join();
                                                            const dispatcher = connection.play('./soundfx/fakeleavesfx.mp3')
                                                                message.channel.send("🔊 Playing the **'Discord Leave'** sound effect in your voice channel").catch(error =>{
                                                                })
                                                                dispatcher.on('finish', () => {
                                                                    message.member.voice.channel.leave();
                                                                  });
                                                                
                                                              } else {
                                                                message.delete().catch(error =>{
                                                                })
                                                                message.reply('Join a channel and try again')
                                                                .then(message => {
                                                                message.delete({timeout:3000});
                                                                }); 
                                                              }}
                                                              else if (input == "bruh") {

                                                                if (message.guild.me.voice.channel) {
                                                                    return message.channel.send("Another user is already using me! Please try again soon.")
                                                                }
                                            
                                                                if (message.member.voice.channel) {
                                                                    message.delete().catch(error =>{
                                                                    })
                                                                    talkedRecently.add(message.author.id);
                                                            setTimeout(() => {
                                                                talkedRecently.delete(message.author.id);
                                                            }, 10000);
                                                                    const connection = await message.member.voice.channel.join();
                                                                const dispatcher = connection.play('./soundfx/bruhsfx.mp3')
                                                                    message.channel.send("🔊 Playing the **'Bruh'** sound effect in your voice channel").catch(error =>{
                                                                    })
                                                                    dispatcher.on('finish', () => {
                                                                        message.member.voice.channel.leave();
                                                                      });
                                                                    
                                                                  } else {
                                                                    message.delete().catch(error =>{
                                                                    })
                                                                    message.reply('Join a channel and try again')
                                                                    .then(message => {
                                                                    message.delete({timeout:3000});
                                                                    }); 
                                                                  }}
                                                                  else if (input == "sadtrombone") {

                                                                    if (message.guild.me.voice.channel) {
                                                                        return message.channel.send("Another user is already using me! Please try again soon.")
                                                                    }
                                                
                                                                    if (message.member.voice.channel) {
                                                                        message.delete().catch(error =>{
                                                                        })
                                                                        talkedRecently.add(message.author.id);
                                                                setTimeout(() => {
                                                                    talkedRecently.delete(message.author.id);
                                                                }, 10000);
                                                                        const connection = await message.member.voice.channel.join();
                                                                    const dispatcher = connection.play('./soundfx/sadtrombonesfx.mp3')
                                                                        message.channel.send("🔊 Playing the **'Sad Trombone'** sound effect in your voice channel").catch(error =>{
                                                                        })
                                                                        dispatcher.on('finish', () => {
                                                                            message.member.voice.channel.leave();
                                                                          });
                                                                        
                                                                      } else {
                                                                        message.delete().catch(error =>{
                                                                        })
                                                                        message.reply('Join a channel and try again')
                                                                        .then(message => {
                                                                        message.delete({timeout:3000});
                                                                        }); 
                                                                      }}
                                                                      else if (input == "metalgear") {

                                                                        if (message.guild.me.voice.channel) {
                                                                            return message.channel.send("Another user is already using me! Please try again soon.")
                                                                        }
                                                    
                                                                        if (message.member.voice.channel) {
                                                                            message.delete().catch(error =>{
                                                                            })
                                                                            talkedRecently.add(message.author.id);
                                                                    setTimeout(() => {
                                                                        talkedRecently.delete(message.author.id);
                                                                    }, 10000);
                                                                            const connection = await message.member.voice.channel.join();
                                                                        const dispatcher = connection.play('./soundfx/metalgearsfx.mp3')
                                                                            message.channel.send("🔊 Playing the **'Metal Gear'** sound effect in your voice channel").catch(error =>{
                                                                            })
                                                                            dispatcher.on('finish', () => {
                                                                                message.member.voice.channel.leave();
                                                                              });
                                                                            
                                                                          } else {
                                                                            message.delete().catch(error =>{
                                                                            })
                                                                            message.reply('Join a channel and try again')
                                                                            .then(message => {
                                                                            message.delete({timeout:3000});
                                                                            }); 
                                                                          }}
                                                                          else if (input == "vsauce") {

                                                                            if (message.guild.me.voice.channel) {
                                                                                return message.channel.send("Another user is already using me! Please try again soon.")
                                                                            }
                                                        
                                                                            if (message.member.voice.channel) {
                                                                                message.delete().catch(error =>{
                                                                                })
                                                                                talkedRecently.add(message.author.id);
                                                                        setTimeout(() => {
                                                                            talkedRecently.delete(message.author.id);
                                                                        }, 10000);
                                                                                const connection = await message.member.voice.channel.join();
                                                                            const dispatcher = connection.play('./soundfx/vsaucesfx.mp3')
                                                                                message.channel.send("🔊 Playing the **'Hey VSauce, Michael here'** sound effect in your voice channel").catch(error =>{
                                                                                })
                                                                                dispatcher.on('finish', () => {
                                                                                    message.member.voice.channel.leave();
                                                                                  });
                                                                                
                                                                              } else {
                                                                                message.delete().catch(error =>{
                                                                                })
                                                                                message.reply('Join a channel and try again')
                                                                                .then(message => {
                                                                                message.delete({timeout:3000});
                                                                                }); 
                                                                              }}
                                                                              else if (input == "airhorn") {

                                                                                if (message.guild.me.voice.channel) {
                                                                                    return message.channel.send("Another user is already using me! Please try again soon.")
                                                                                }
                                                            
                                                                                if (message.member.voice.channel) {
                                                                                    message.delete().catch(error =>{
                                                                                    })
                                                                                    talkedRecently.add(message.author.id);
                                                                            setTimeout(() => {
                                                                                talkedRecently.delete(message.author.id);
                                                                            }, 10000);
                                                                                    const connection = await message.member.voice.channel.join();
                                                                                const dispatcher = connection.play('./soundfx/airhornsfx.mp3')
                                                                                    message.channel.send("🔊 Playing the **'AirHorn'** sound effect in your voice channel").catch(error =>{
                                                                                    })
                                                                                    dispatcher.on('finish', () => {
                                                                                        message.member.voice.channel.leave();
                                                                                      });
                                                                                    
                                                                                  } else {
                                                                                    message.delete().catch(error =>{
                                                                                    })
                                                                                    message.reply('Join a channel and try again')
                                                                                    .then(message => {
                                                                                    message.delete({timeout:3000});
                                                                                    }); 
                                                                                  }}
                                                                                  else if (input == "cricket") {

                                                                                    if (message.guild.me.voice.channel) {
                                                                                        return message.channel.send("Another user is already using me! Please try again soon.")
                                                                                    }
                                                                
                                                                                    if (message.member.voice.channel) {
                                                                                        message.delete().catch(error =>{
                                                                                        })
                                                                                        talkedRecently.add(message.author.id);
                                                                                setTimeout(() => {
                                                                                    talkedRecently.delete(message.author.id);
                                                                                }, 10000);
                                                                                        const connection = await message.member.voice.channel.join();
                                                                                    const dispatcher = connection.play('./soundfx/cricketsfx.mp3')
                                                                                        message.channel.send("🔊 Playing the **'Crickets'** sound effect in your voice channel").catch(error =>{
                                                                                        })
                                                                                        dispatcher.on('finish', () => {
                                                                                            message.member.voice.channel.leave();
                                                                                          });
                                                                                        
                                                                                      } else {
                                                                                        message.delete().catch(error =>{
                                                                                        })
                                                                                        message.reply('Join a channel and try again')
                                                                                        .then(message => {
                                                                                        message.delete({timeout:3000});
                                                                                        }); 
                                                                                      }}
                                                                                      else if (input == "fakecall") {

                                                                                        if (message.guild.me.voice.channel) {
                                                                                            return message.channel.send("Another user is already using me! Please try again soon.")
                                                                                        }
                                                                            
                                                                                        if (message.member.voice.channel) {
                                                                                            message.delete().catch(error =>{
                                                                                            })
                                                                                            talkedRecently.add(message.author.id);
                                                                                    setTimeout(() => {
                                                                                        talkedRecently.delete(message.author.id);
                                                                                    }, 10000);
                                                                                            const connection = await message.member.voice.channel.join();
                                                                                        const dispatcher = connection.play('./soundfx/fakecallsfx.mp3')
                                                                                            message.channel.send("🔊 Playing the **'Discord Call'** sound effect in your voice channel").catch(error =>{
                                                                                            })
                                                                                            dispatcher.on('finish', () => {
                                                                                                message.member.voice.channel.leave();
                                                                                              });
                                                                                            
                                                                                          } else {
                                                                                            message.delete().catch(error =>{
                                                                                            })
                                                                                            message.reply('Join a channel and try again')
                                                                                            .then(message => {
                                                                                            message.delete({timeout:3000});
                                                                                            }); 
                                                                                          }}

                                                                                          else if (input == "cricket") {

                                                                                            if (message.guild.me.voice.channel) {
                                                                                                return message.channel.send("Another user is already using me! Please try again soon.")
                                                                                            }
                                                                        
                                                                                            if (message.member.voice.channel) {
                                                                                                message.delete().catch(error =>{
                                                                                                })
                                                                                                talkedRecently.add(message.author.id);
                                                                                        setTimeout(() => {
                                                                                            talkedRecently.delete(message.author.id);
                                                                                        }, 10000);
                                                                                                const connection = await message.member.voice.channel.join();
                                                                                            const dispatcher = connection.play('./soundfx/cricketsfx.mp3')
                                                                                                message.channel.send("🔊 Playing the **'Crickets'** sound effect in your voice channel").catch(error =>{
                                                                                                })
                                                                                                dispatcher.on('finish', () => {
                                                                                                    message.member.voice.channel.leave();
                                                                                                  });
                                                                                                
                                                                                              } else {
                                                                                                message.delete().catch(error =>{
                                                                                                })
                                                                                                message.reply('Join a channel and try again')
                                                                                                .then(message => {
                                                                                                message.delete({timeout:3000});
                                                                                                }); 
                                                                                              }}
                                                                                              else if (input == "numberone") {
        
                                                                                                if (message.guild.me.voice.channel) {
                                                                                                    return message.channel.send("Another user is already using me! Please try again soon.")
                                                                                                }
                                                                                    
                                                                                                if (message.member.voice.channel) {
                                                                                                    message.delete().catch(error =>{
                                                                                                    })
                                                                                                    talkedRecently.add(message.author.id);
                                                                                            setTimeout(() => {
                                                                                                talkedRecently.delete(message.author.id);
                                                                                            }, 10000);
                                                                                                    const connection = await message.member.voice.channel.join();
                                                                                                const dispatcher = connection.play('./soundfx/numberonesfx.mp3')
                                                                                                    message.channel.send("🔊 Playing the **'We are Number one'** sound effect in your voice channel").catch(error =>{
                                                                                                    })
                                                                                                    dispatcher.on('finish', () => {
                                                                                                        message.member.voice.channel.leave();
                                                                                                      });
                                                                                                    
                                                                                                  } else {
                                                                                                    message.delete().catch(error =>{
                                                                                                    })
                                                                                                    message.reply('Join a channel and try again')
                                                                                                    .then(message => {
                                                                                                    message.delete({timeout:3000});
                                                                                                    }); 
                                                                                                  }}
                                                                                                  else if (input == "timetostop") {
        
                                                                                                    if (message.guild.me.voice.channel) {
                                                                                                        return message.channel.send("Another user is already using me! Please try again soon.")
                                                                                                    }
                                                                                        
                                                                                                    if (message.member.voice.channel) {
                                                                                                        message.delete().catch(error =>{
                                                                                                        })
                                                                                                        talkedRecently.add(message.author.id);
                                                                                                setTimeout(() => {
                                                                                                    talkedRecently.delete(message.author.id);
                                                                                                }, 10000);
                                                                                                        const connection = await message.member.voice.channel.join();
                                                                                                    const dispatcher = connection.play('./soundfx/timetostopsfx.mp3')
                                                                                                        message.channel.send("🔊 Playing the **'It's time to STOP'** sound effect in your voice channel").catch(error =>{
                                                                                                        })
                                                                                                        dispatcher.on('finish', () => {
                                                                                                            message.member.voice.channel.leave();
                                                                                                          });
                                                                                                        
                                                                                                      } else {
                                                                                                        message.delete().catch(error =>{
                                                                                                        })
                                                                                                        message.reply('Join a channel and try again')
                                                                                                        .then(message => {
                                                                                                        message.delete({timeout:3000});
                                                                                                        }); 
                                                                                                      }}
                                                                                                      else if (input == "freerealestate") {
        
                                                                                                        if (message.guild.me.voice.channel) {
                                                                                                            return message.channel.send("Another user is already using me! Please try again soon.")
                                                                                                        }
                                                                                            
                                                                                                        if (message.member.voice.channel) {
                                                                                                            message.delete().catch(error =>{
                                                                                                            })
                                                                                                            talkedRecently.add(message.author.id);
                                                                                                    setTimeout(() => {
                                                                                                        talkedRecently.delete(message.author.id);
                                                                                                    }, 10000);
                                                                                                            const connection = await message.member.voice.channel.join();
                                                                                                        const dispatcher = connection.play('./soundfx/freerealestatesfx.mp3')
                                                                                                            message.channel.send("🔊 Playing the **'It's free real estate'** sound effect in your voice channel").catch(error =>{
                                                                                                            })
                                                                                                            dispatcher.on('finish', () => {
                                                                                                                message.member.voice.channel.leave();
                                                                                                              });
                                                                                                            
                                                                                                          } else {
                                                                                                            message.delete().catch(error =>{
                                                                                                            })
                                                                                                            message.reply('Join a channel and try again')
                                                                                                            .then(message => {
                                                                                                            message.delete({timeout:3000});
                                                                                                            }); 
                                                                                                          }}
                                                                                                          else if (input == "rickroll") {
        
                                                                                                            if (message.guild.me.voice.channel) {
                                                                                                                return message.channel.send("Another user is already using me! Please try again soon.")
                                                                                                            }
                                                                                                
                                                                                                            if (message.member.voice.channel) {
                                                                                                                message.delete().catch(error =>{
                                                                                                                })
                                                                                                                talkedRecently.add(message.author.id);
                                                                                                        setTimeout(() => {
                                                                                                            talkedRecently.delete(message.author.id);
                                                                                                        }, 10000);
                                                                                                                const connection = await message.member.voice.channel.join();
                                                                                                            const dispatcher = connection.play('./soundfx/rickroll.mp3')
                                                                                                                message.channel.send(`Congrats ${message.member}! You found a secret sound!\n🔊 Playing **'Rick Roll'** in your voice channel!`).then(message => {
                                                                                                                    message.delete({timeout:3000});
                                                                                                                    }).catch(error =>{
                                                                                                                })
                                                                                                                dispatcher.on('finish', () => {
                                                                                                                    message.member.voice.channel.leave();
                                                                                                                  });
                                                                                                                
                                                                                                              } else {
                                                                                                                message.delete().catch(error =>{
                                                                                                                })
                                                                                                                message.reply('Join a channel and try again')
                                                                                                                .then(message => {
                                                                                                                message.delete({timeout:3000});
                                                                                                                }); 
                                                                                                              }}
                                                                                                              else if (input == "rickrollearrape") {
        
                                                                                                                if (message.guild.me.voice.channel) {
                                                                                                                    return message.channel.send("Another user is already using me! Please try again soon.")
                                                                                                                }
                                                                                                    
                                                                                                                if (message.member.voice.channel) {
                                                                                                                    message.delete().catch(error =>{
                                                                                                                    })
                                                                                                                    talkedRecently.add(message.author.id);
                                                                                                            setTimeout(() => {
                                                                                                                talkedRecently.delete(message.author.id);
                                                                                                            }, 10000);
                                                                                                                    const connection = await message.member.voice.channel.join();
                                                                                                                const dispatcher = connection.play('./soundfx/rickrollearrape.mp3')
                                                                                                                    dispatcher.on('finish', () => {
                                                                                                                        message.member.voice.channel.leave();
                                                                                                                      });
                                                                                                                    
                                                                                                                  } else {
                                                                                                                    message.delete().catch(error =>{
                                                                                                                    })
                                                                                                                    message.reply('Join a channel and try again')
                                                                                                                    .then(message => {
                                                                                                                    message.delete({timeout:3000});
                                                                                                                    }); 
                                                                                                                  }}
                                                                                                          else if (input == "fakeknocking") {
        
                                                                                                            if (message.guild.me.voice.channel) {
                                                                                                                return message.channel.send("Another user is already using me! Please try again soon.")
                                                                                                            }
                                                                                                
                                                                                                            if (message.member.voice.channel) {
                                                                                                                message.delete().catch(error =>{
                                                                                                                })
                                                                                                                talkedRecently.add(message.author.id);
                                                                                                        setTimeout(() => {
                                                                                                            talkedRecently.delete(message.author.id);
                                                                                                        }, 10000);
                                                                                                                const connection = await message.member.voice.channel.join();
                                                                                                            const dispatcher = connection.play('./soundfx/fakeknocking.mp3')
                                                                                                                message.channel.send("🔊 Playing the **'Fake Knocking'** sound effect in your voice channel").catch(error =>{
                                                                                                                })
                                                                                                                dispatcher.on('finish', () => {
                                                                                                                    message.member.voice.channel.leave();
                                                                                                                  });
                                                                                                                
                                                                                                              } else {
                                                                                                                message.delete().catch(error =>{
                                                                                                                })
                                                                                                                message.reply('Join a channel and try again')
                                                                                                                .then(message => {
                                                                                                                message.delete({timeout:3000});
                                                                                                                }); 
                                                                                                              }}
                                                                                          


                else {
                    let invitehelp = new Discord.MessageEmbed()
                    .setTitle('SoundBoard')
                    .addField("Usage:", `${prefix}soundboard <soundeffectname>\nAliases: \`${prefix}sfx | ${prefix}soundfx | ${prefix}soundeffects | ${prefix}sb\``)
                    .addField("Available Sound Effects:", "`airhorn`\n`bruh`\n`cena`\n`cricket`\n`error`\n`fakecall`\n`fakejoin`\n`fakeknocking`\n`fakeleave`\n`fakeping`\n`fbiopenup`\n`freerealestate`\n`law&order`\n`metalgear`\n`noice`\n`numberone`\n`nootnoot`\n`nope`\n`oof`\n`sadtrombone`\n`timetostop`\n`vsauce`\n`wow`\n`yeet`")
                    .setFooter('Developed by NightCrafter1#0882', 'https://cdn.discordapp.com/attachments/697781307433943130/720945852470001674/NightCrafter1.png')
                    .setColor('AQUA')
                    message.channel.send(invitehelp).catch(error =>{
                    })}


    }
}
